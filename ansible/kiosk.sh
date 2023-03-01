#!/bin/bash

xset s noblank
xset s off
xset -dpms

unclutter -idle 0.5 -root &
sed -i 's/"exited_cleanly":false/"exited_cleanly":true/' /home/guest/.config/chromium/Default/Preferences
sed -i 's/"exit_type":"Crashed"/"exit_type":"Normal"/' /home/guest/.config/chromium/Default/Preferences

/usr/bin/chromium-browser  --disable-pinch --noerrdialogs --disable-infobars --kiosk http://localhost
