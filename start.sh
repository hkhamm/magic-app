#!/bin/bash

xset s noblank
xset s off
xset -dpms
sed -i 's/"exited_cleanly":false/"exited_cleanly":true/' /home/pi/.config/chromium/Default/Preferences
sed -i 's/"exit_type":"Crashed"/"exit_type":"Normal"/' /home/pi/.config/chromium/Default/Preferences

/usr/bin/chromium-browser --no-sandbox --incognito --start-fullscreen http://localhost
