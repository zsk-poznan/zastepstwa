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

Install `lighttpd`

``` sh
# Create symlink to `./lighttpd.conf`
ln -s ./lighttpd.conf /etc/lighttpd/lighttpd.conf

# Download built front application
wget https://github.com/zsk-poznan/zastepstwa/releases/download/$VERSION/front-$VERSION.tar.gz

tar -xzf front-$VERSION.tar.gz
mv front-$VERSION /var/www/zastepstwa
```
