# zastepstwa

Web app for displaying substitute teachers. This app runs in teacher room in our
school on Raspberry Pi with a touchscreen attached.

## Contributing

You will need to have [Docker](https://www.docker.com/get-started) installed and `make` for running snippets from `Makefile`.

You can run `make start logs` to start the application in development mode. This could take a while since it ensures all dependencies are installed. After that, you should be able to visit the app on http://localhost:3000. The hot reloading is enabled.

To stop the app run `make stop`.

For more snippets type `make help` or view the `Makefile`.

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
