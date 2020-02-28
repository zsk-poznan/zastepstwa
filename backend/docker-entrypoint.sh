#!/bin/sh

python3 -m venv venv
source venv/bin/activate
pip3 install -r /app/dev_requirements.txt
python3 mocks/html_generator.py > Zastępstwa.html
python3 manage.py runserver
