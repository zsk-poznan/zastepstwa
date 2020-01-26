# zastepstwa-gui

## Install dependencies

```sh
pip3 install -r requirements.txt
```

## Development

We use Docker for development.

```sh
make start # For starting the containers, you can access the site on http://localhost:5000
make logs # To show the logs
make stop # To stop all the containers
```

For more snippets type `make help`

## Deploy

``` sh
docker-compose -f production.yml up -d

# or
make start-prod
```

### Raspberry Pi configuration

> All files for rpi configuration you can find in `/raspbian` 

We use RealVNC to connect to the rpi and also ngrok to have a ssh connection (`ngrok_ssh`).

On boot raspbian autologin to the `guest` user (`lightdm.conf`)

@latachz created a script for starting chromium and configuring screen saver. (`kiosk.sh`)

In home `/home/guest/.config/autostart` we start this script on system start.

Docker containers thanks to `restart: always` will automatically start.

