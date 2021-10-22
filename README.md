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
sudo cp -R /home/pi/Desktop/magic-app/dist/* /var/www/html
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
/usr/bin/chromium-browser --disable-restore-session-state --start-fullscreen http://localhost &
```

### Reboot the system to run the app

```
sudo reboot
```

## Development

```
yarn dev
```
