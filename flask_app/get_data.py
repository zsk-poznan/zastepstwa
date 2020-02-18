# -*- coding: utf-8 -*-

import json
import codecs
from bs4 import BeautifulSoup

FILE = "Zastępstwa.html"

def main():
    with codecs.open(
        FILE, "r", "utf-8"
    ) as f:  # Zastępstwa.html in main folder
        soup = BeautifulSoup(f.read(), "html.parser")

    rows = soup.find_all("tr")

    data = [row.find_all("td") for row in rows]

    del data[:2]  # deletes useless two first lines

    replacements = {}

    for row in data:
        lesson_info = [col.text for col in row]
        teacher = lesson_info.pop(
            5
        )  # it takes 5th element (substitutiute teacher) of the list and then deletes it
        if teacher not in replacements:
            replacements[teacher] = [lesson_info]
        else:
            replacements[teacher].append(lesson_info)
    return replacements

def date():
    with codecs.open(
        FILE, "r", "utf-8"
    ) as f:  # Zastępstwa.html in main folder
        soup = BeautifulSoup(f.read(), "html.parser")

    # it looks for <h2>Okres: 26.11.2019 (wt.) - 26.11.2019 (wt.)</h2> and takes date from it
    data = soup.find("h2") 
    date = str(data.text).split(' ')[1]
    
    return date