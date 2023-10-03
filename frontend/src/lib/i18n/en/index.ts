import type { BaseTranslation } from '../i18n-types';

const en = {
	home: {
		page_title: 'Home',
		order_groups: 'Groups',
		order_name: 'Name',
		order_ip: 'IP',
		order_tooltip: 'Order',
		no_devices: 'No devices here.',
		add_first_device: 'Add your first device',
		grant_permissions:
			'Please ask the admin to grant you permissions to existing devices or to create new ones.'
	},
	account: {
		page_title: 'Account',
		account_type_admin: 'Admin',
		account_type_user: 'User',
		avatar_title: 'Avatar',
		language_title: 'Language',
		language_option_auto: 'Automatic',
		change_password_title: 'Change password',
		change_password_body: 'After the password has been changed, you will need to log in again.',
		change_password_label: 'Old password',
		change_password_new: 'New password',
		change_password_confirm: 'Confirm password'
	},
	device: {
		page_title: 'New device',
		tabs: ['Manual', 'Network Scan'],
		card_btn_more: 'More',
		card_btn_more_edit: 'Edit',
		card_btn_more_sleep: 'Sleep',
		card_btn_more_reboot: 'Reboot',
		card_tooltip_wake_cron: 'Wake cron',
		card_tooltip_shutdown_cron: 'Shutdown cron',
		card_tooltip_wake_password: 'Wake password',
		card_tooltip_last_status_change: 'Last status change',
		card_password: 'Password',
		card_nic_tooltip_pending: 'Pending',
		card_nic_tooltip_shutdown: 'Shut down',
		card_nic_tooltip_shutdown_no_cmd: 'No shutdown command set',
		card_nic_tooltip_shutdown_no_permission: 'No permission to shut down this device',
		card_nic_tooltip_power: 'Power on',
		card_nic_tooltip_power_no_permission: 'No permission to power on this device',
		general: 'General',
		general_name: 'Name',
		general_name_placeholder: 'Device name',
		general_ip: 'IP',
		general_mac: 'Mac',
		general_netmask: 'Netmask',
		general_required_field: 'required field',
		ports: 'Ports',
		ports_desc: 'UpSnap can also check if given ports are open.',
		ports_add_new: 'Add new port',
		ports_name: 'Name',
		ports_number: 'Number',
		link: 'Link',
		link_desc:
			'Makes your device name a clickable link, perfect for linking a dashboard for example.',
		wake: 'Wake',
		wake_desc: 'You can power this device using a scheduled cron job.',
		wake_cron: 'Wake cron',
		wake_cron_enable: 'Enable wake cron',
		sol: 'Sleep-On-LAN',
		sol_desc1:
			'You can put computers to sleep using the <a class="link" href="https://github.com/SR-G/sleep-on-lan" target="_blank">Sleep-On-LAN</a> tool. Sleep-On-LAN (SOL) is an external tool/daemon that operates on the PCs you want to put to sleep, providing a REST endpoint. For instructions on setting up Sleep-On-LAN, please refer to the <a href="https://github.com/SR-G/sleep-on-lan#usage" class="link" target="_blank">Usage</a> section.',
		sol_desc2:
			'SOL is configured to send requests over HTTP instead of UDP to enable authorization and make requests more reliable.',
		sol_desc3:
			'Therefore, please ensure that you include <span class="badge">HTTP:&lt;YOURPORT&gt;</span> in the <span class="badge">Listeners</span> section of the <a href="https://github.com/SR-G/sleep-on-lan#configuration" class="link" target="_blank">SOL configuration</a>.',
		sol_enable: 'Enable Sleep-On-LAN',
		sol_port: 'SOL Port',
		sol_authorization: 'Authorization',
		sol_user: 'SOL User',
		sol_password: 'SOL Password',
		shutdown: 'Shutdown',
		shutdown_desc:
			'This <strong>shell command</strong> will run inside your container (if you use docker) or on your host (if you use the binary). To verify that works you can run the command inside the container or on your host shell first. Common commands are <span class="badge">net rpc</span> for windows, <span class="badge">sshpass</span> for linux or <span class="badge">curl</span> in general to make web requests.',
		shutdown_examples: 'Examples:',
		shutdown_examples_windows: 'Shutdown remote windows machine:',
		shutdown_examples_linux: 'Shutdown remote linux machine:',
		shutdown_cmd: 'Shutdown command',
		shutdown_cron_desc:
			'Just like setting a cron to wake the device, you can also schedule a cron job to shut down this device.',
		shutdown_cron: 'Shutdown cron',
		shutdown_cron_enable: 'Enable shutdown cron',
		password: 'Password',
		password_desc:
			'Some network cards have the option to set a password for magic packets, also called <span class="badge">SecureON</span>. Password can only be 0, 4 or 6 characters in length.',
		groups: 'Groups',
		groups_desc: 'You can add devices to a group to have them sorted by group on the dashboard.',
		groups_placeholder: "e.g. 'Basement' or 'Office'",
		network_scan_range_saved: 'Scan range saved',
		network_scan_desc:
			"Automatically scan your network for devices. For this to work, you need to run UpSnap as root/admin and have nmap installed and available in your $PATH (For docker users, thats already the case and you don't need to do anything). Scanning might take some seconds.",
		network_scan_ip_range: 'IP range',
		network_scan_no_range: 'No scan range',
		network_scan_unsaved_changes: 'Unsaved changes',
		network_scan_running: 'Scan running',
		network_scan: 'Scan',
		network_scan_ip: 'IP:',
		network_scan_mac: 'Mac:',
		network_scan_mac_vendor: 'Mac vendor:',
		network_scan_netmask: 'Netmask:',
		network_scan_add_all: 'Add all devices',
		network_scan_replace_netmask: 'Replace netmask for all devices?',
		network_scan_new_netmask: 'New netmask',
		network_scan_include_unknown: 'Include devices where name is "Unknown"'
	},
	login: {
		welcome: 'Welcome',
		email_label: 'Email or Username:',
		password_label: 'Password:',
		btn_more: 'More',
		menu_title_auth_providers: 'Other Auth Providers',
		btn_login: 'Login'
	},
	settings: {
		page_title: 'Settings',
		ping_interval_title: 'Ping interval',
		ping_interval_desc1:
			'Sets the interval in which the devices are pinged. Leave blank to use default value of <span class="badge">@every 3s</span>.',
		ping_interval_desc2:
			'Learn more about the correct syntax for cron on <a class="link" href="https://en.wikipedia.org/wiki/Cron" target="_blank">Wikipedia</a> or refer to the <a class="link" href="https://pkg.go.dev/github.com/robfig/cron/v3" target="_blank">package documentation</a>.',
		lazy_ping_title: 'Lazy ping',
		lazy_ping_desc:
			"When lazy ping is turned on, UpSnap will only ping devices if there is an active user visiting the website. If it's turned off, UpSnap will always ping devices.",
		lazy_ping_enable: 'Enable',
		website_title_title: 'Website title',
		website_title_desc: 'Sets the title of the website and in the browser tab.',
		icon_title: 'Icon',
		icon_desc: 'Set a custom favicon. Supported file types are:',
		upsnap_version: 'UpSnap version'
	},
	users: {
		page_title: 'Users',
		allow_create_devices: 'Allow {username} to create new devices and edit device groups',
		device_permissions: 'Device permissions',
		create_new_device: 'Create new device',
		read: 'Read',
		update: 'Update',
		delete: 'Delete',
		power: 'Power',
		toggle: 'Toggle',
		confirm_delete_title: 'Confirm delete',
		confirm_delete_desc: 'Are you sure you want to delete {username}?',
		create_new_user: 'Create new user',
		username: 'Username',
		password: 'Password',
		password_confirm: 'Password confirm',
		required_field: 'required field'
	},
	buttons: {
		save: 'Save',
		delete: 'Delete',
		change: 'Change',
		reset: 'Reset',
		cancle: 'Cancle',
		add: 'Add'
	},
	welcome: {
		step1_page_title: 'Welcome to UpSnap 🥳',
		step1_setup_desc: 'Please complete the following steps to finish the setup.',
		step1_setup_btn_next: 'Next',
		step2_page_title: 'Create an admin account',
		step2_label_email: 'Email:',
		step2_label_password: 'Password:',
		step2_label_min_chars: 'min. 10 characters',
		step2_label_password_confirm: 'Password confirm:',
		step2_btn_create: 'Create',
		step3_page_title: 'You are all set! 🎉',
		step3_page_desc: 'Go ahead and add some devices to your dashboard.',
		step3_btn_done: 'Lets go!',
		not_expected_title: "I didn't expect you here! 🧐",
		not_expected_desc: 'You are already done with the setup! Nothing to do.',
		not_expected_back: 'Take me back',
		progress_step1: 'Welcome',
		progress_step2: 'Create account',
		progress_step3: 'Done'
	},
	toasts: {
		admin_saved: 'Admin saved',
		user_saved: 'User saved',
		user_created: 'User {username} created',
		user_deleted: 'User {username} deleted',
		settings_saved: 'Saved settings',
		password_changed: 'Password changed. Please login again.',
		passwords_missmatch: "Passwords don't match",
		permissions_created: 'Permissions for {username} created',
		permissions_deleted: 'Permissions for {username} deleted',
		permissions_updated: 'Permissions for {username} updated',
		permissions_updated_personal: 'Your permissions have been updated',
		no_permission: "You don't have permission to visit {url}",
		device_created: 'Created {device}',
		devices_created_multiple: 'Created {count|int} devices',
		device_updated: 'Updated {device}',
		device_deleted: 'Deleted {device}',
		group_created: 'Created group {group}',
		group_deleted: 'Deleted group {group}'
	},
	navbar: {
		theme: 'Theme',
		new: 'New',
		edit_account: 'Edit account',
		logout: 'Logout'
	}
} satisfies BaseTranslation;

export default en;
