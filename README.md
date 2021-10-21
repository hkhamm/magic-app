# magic-app

## Install dependencies

```
yarn
```

## Development

```
yarn dev
```

## Serve

```
yarn serve
```

## Chromium full screen on start

`sudo nano /etc/rc.local`

Add this before the exit 0:

`sudo bash /home/pi/Desktop/magic-app/start.sh`

## Hide cursor

`sudo nano /etc/lightdm/lightdm.conf`

Add `xserver-command=X -bs -core -nocursor` at the bottom in the `[Seat*]` section
