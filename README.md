# zastepstwa

Web app for displaying substitute teachers. This app runs in teacher room in our
school on Raspberry Pi with a touchscreen attached.

## Development

We use Docker for development.

```sh
make start # For starting the containers, you can access the site on http://localhost:5000
make logs # To show the logs
make stop # To stop all the containers
```

For more snippets type `make help`

## Deploy

To deploy you need to have
[ansible](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html)
installed and ssh connection to the raspberry pi with raspbian installed. We
initially were using [ngrok](https://ngrok.com) to have connection. You use [this
service](ansible/ngrok-ssh.service) for this.

If there's a reason that you don't want forward ssh you could try [this](#no_ssh)

### SSH

Edit `ansible/hosts` to match your ssh configuration.

``` sh
ansible-galaxy install haxorof.docker_ce

ansible-playbook ansible/deploy.yml
```

> This process could take a while since it checks if every dependency is
> installed. But thanks to that it's fully automatic so you don't need to do
> anything (unless an error occurs 😜)

### no_ssh

If you don't want to share ssh, there is a way to run ansible locally.

* https://www.middlewareinventory.com/blog/run-ansible-playbook-locally/
* https://superuser.com/questions/336226/how-to-ssh-to-localhost-without-password

But it's easier if you have remote access.
