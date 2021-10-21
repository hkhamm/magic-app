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

#### First, it seems that ~/.config/lxsession/LXDE-pi/autostart does not exist by default.

1. copy the **autostart**

```
cp /etc/xdg/lxsession/LXDE-pi/autostart ~/.config/lxsession/LXDE-pi/
```

<!-- Raspbian PI OS Buster
```
cp /etc/xdg/lxsession/LXDE-pi/autostart ~/.config/lxpanel/LXDE-pi/
``` -->

2. open the **autostart** with _nano_

```
nano ~/.config/lxsession/LXDE-pi/autostart
```

<!-- BUSTER
```
nano ~/.config/lxpanel/LXDE-pi/autostart
``` -->

3. Then edit the **autostart**

```
@lxpanel --profile LXDE-pi
@pcmanfm --desktop --profile LXDE-pi
#@xscreensaver -no-splash
point-rpi
@chromium-browser --start https://google.com/
```

if you want to autostart **incongnito mode**

```
@chromium-browser --incognito --start https://google.com/
```

`^ + x` exit and save

then `sudo reboot` to try on

---

the various other browser modes:

- Application Mode: `@chromium-browser --app`. The browser starts up without displaying any toolbars.

- Full-screen mode: `@chromium-browser --start-fullscreen`. The browser starts in app. mode but expanded to full-screen. You can press the F11 key to break out of full-screen mode.

- Kiosk mode: `@chromium-browser --kiosk`. The browser starts in full-screen mode but does not respond to the F11 key, nor to any command to get it to switch tasks.

## Hide cursor

Edit `/etc/lightdm/lightdm.conf`

Add `xserver-command = X -nocursor` at the bottom in the `[Seat*]` section
