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

## Chromium full screen

https://pimylifeup.com/raspberry-pi-kiosk/

## Hide cursor

Edit `/etc/lightdm/lightdm.conf`

Add `xserver-command=X -bs -core -nocursor` at the bottom in the `[Seat*]` section
