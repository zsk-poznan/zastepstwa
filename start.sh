#!/bin/bash

cd Desktop/zastepstwa-gui
echo `env FLASK_APP=main.py flask run` & 
echo `chromium --start-fullscreen http://localhost:5000`g
