# magic-app

## Setup

### Get the code on the Raspberry PI

```shell
cd /home/pi/Desktop
git clone https://github.com/hkhamm/magic-app
```

### Install dependencies

```shell
sudo apt install nvm nginx
npm -g i yarn
cd magic-app
yarn
```

### Build

```shell
yarn build
```

### Install app

```shell
yarn deploy
```

### Hide cursor

```shell
sudo nano /etc/lightdm/lightdm.conf
```

Add `xserver-command=X -bs -core -nocursor` at the bottom in the `[Seat*]` section

### Start Chromium full screen on system start

```shell
sudo nano /etc/xdg/lxsession/LXDE-pi/autostart
```

At the end add:

```
xset s noblank
xset s off
xset -dpms
/usr/bin/chromium-browser --incognito --kiosk http://localhost &
```

Note: exit kiosk mode with ALT-F4

### Reboot the system to run the app

```
sudo reboot
```

## Development

```
yarn dev
```
