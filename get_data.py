import json
from lxml import etree

def main():
    s = open("zastepstwa.html", "r")
    table = etree.HTML(s.read()).find("body/table")

    rows = list(table)
    del rows[:2]

    replacements = {}

    for row in rows:
        lesson_info = [col.text for col in row]
        teacher = lesson_info.pop(1)
        if teacher not in replacements:
            replacements[teacher] = [lesson_info]
        else:
            replacements[teacher].append(lesson_info)


    #print(json.dumps(replacements))
    return(replacements)
