import json
import socket
import subprocess
import threading

from asgiref.sync import async_to_sync
from celery import shared_task
from channels.layers import get_channel_layer

from .models import Device

channel_layer = get_channel_layer()


class WolDevice:
    def ping_device(self, ip):
        try:
            subprocess.check_output(["ping", "-c", "1", "-W", "1", ip])
            return True
        except subprocess.CalledProcessError:
            return False

    def check_port(self, ip, port):
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        sock.settimeout(1)
        if sock.connect_ex((ip, port)) == 0:
            return True
        return False

    def start(self, dev):
        data = {
            "id": dev.id,
            "name": dev.name,
            "ip": dev.ip,
            "mac": dev.mac,
            "up": False,
            "vnc": False,
            "rdp": False,
            "ssh": False
        }

        if self.ping_device(dev.ip):
            data["up"] = True
        if self.check_port(dev.ip, 5900):
            data["vnc"] = True
        if self.check_port(dev.ip, 3389):
            data["rdp"] = True
        if self.check_port(dev.ip, 22):
            data["ssh"] = True

        async_to_sync(channel_layer.group_send)(
            "status", {"type": "send_status", "status": json.dumps(data)})


@shared_task
def status():
    devices = Device.objects.all()

    for dev in devices:
        d = WolDevice()
        t = threading.Thread(target=d.start, args=(dev,))
        t.start()
