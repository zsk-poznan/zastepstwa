import json
import os
import time
from datetime import datetime
from datetime import date
from lxml import etree
import codecs


def Parse(f, PATH):

    s = codecs.open(PATH + f, "r", "utf-8")
    table = etree.HTML(s.read()).find("body/table/tbody")
    rows = list(table)
    del rows[:2]  # deletes useless two first lines
    
    replacements = {}
    for row in rows:
        lesson_info = [col.text for col in row]
        teacher = lesson_info.pop(5)
        if teacher not in replacements:
            replacements[teacher] = [lesson_info]
        else:
            replacements[teacher].append(lesson_info)

    print(replacements)

    myJson = json.dumps(replacements)

    os.system("mv {} Parsed/{}".format(PATH + f, f))

    return(myJson)

def checkForNewFiles():
    if os.path.isfile("Zastępstwa.html"):
        s = codecs.open("Zastępstwa.html", "r", "utf-8")
        table = etree.HTML(s.read()).find("body/table/tbody")
        rows = list(table)
        date = rows[0][0].text

        date = date.split(" ")[1]
        os.system("mv Zastępstwa.html To_Parse/{}.html".format(date))

def deleteOldFiles(date):
    for f in os.listdir("Parsed"):
        if f == "data.json":
            continue
        
        f_date = f.split(".")
        date = date.split(".")
        
        if f_date[0] < date[0] or f_date[1] < date[1] or f_date[2] < date[2]:
            os.remove("Parsed/" + f)
        


def isFileToParse(PATH):

    checkForNewFiles()

    my_date = str(date.today().strftime("%d.%m.%Y"))
    my_file = my_date + '.html'
    #print(PATH + my_file) #for printing file name
    if os.path.isfile(PATH + my_file):
        with open("Parsed/data.json", "w+") as f:
            f.write(Parse(my_file, PATH))
        print("New file parsed", my_date)
        
    else:
        now = datetime.now()
        current_time = now.strftime("%H:%M:%S")

        if os.path.isfile("Parsed/"+my_file):
            print("File already parsed", current_time)
        else:
            with open("Parsed/data.json", "w+") as f:
                f.write("")
            print("Nothing to parse", current_time)

    deleteOldFiles(my_date)



def main():
    CD = 10  # cooldown between checks [s]
    PATH = "To_Parse/"

    while True:
        isFileToParse(PATH)
        time.sleep(CD)

main()
