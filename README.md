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

https://www.makeuseof.com/how-to-run-a-raspberry-pi-program-script-at-startup/

## Hide cursor

Edit `/etc/lightdm/lightdm.conf`

Add `xserver-command=X -bs -core -nocursor` at the bottom in the `[Seat*]` section
