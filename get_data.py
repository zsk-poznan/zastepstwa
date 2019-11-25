# -*- coding: utf-8 -*-

import json
from lxml import etree
import codecs

def main():
    s = codecs.open("/zastepstwa.html", "r", "utf-8")
    table = etree.HTML(s.read()).find("body/table")

    

    rows = list(table)
    del rows[:2]

    replacements = {}

    for row in rows:
        lesson_info = [col.text for col in row]
        teacher = lesson_info.pop(5)
        if teacher not in replacements:
            replacements[teacher] = [lesson_info]
        else:
            replacements[teacher].append(lesson_info)

    return(replacements)



    
