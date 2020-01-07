# -*- coding: utf-8 -*-

import json
from lxml import etree
import codecs


def main():
    s = codecs.open("Zastępstwa.html", "r", "utf-8")  # Zastępstwa.html in main folder
    table = etree.HTML(s.read()).find(
        "body/table/tbody"
    )  # on Windows we have to use "body/table" without /tbody

    rows = list(table)
    del rows[:2]  # deletes useless two first lines

    replacements = {}

    for row in rows:
        lesson_info = [col.text for col in row]
        teacher = lesson_info.pop(
            5
        )  # it takes 5th element (substitutiute teacher) of the list and then deletes it
        if teacher not in replacements:
            replacements[teacher] = [lesson_info]
        else:
            replacements[teacher].append(lesson_info)
    return replacements
