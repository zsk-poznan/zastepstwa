from lxml import etree
s = open("zastepstwa.html", "r")
table = etree.HTML(s.read()).find("body/table")
rows = iter(table)
headers = [col.text for col in next(rows)]
teachers, lessons = [], []
i = 0
for row in rows:
    values = [col.text for col in row]
    print(values)
    lessons.append(values[i])
    teachers.append(values[i])
    i=+1

n = 0

fields = {"teacher": teachers, "lesson": lessons}
#print(fields["teacher"][1:])
#print(fields["lesson"][1:])

