from lxml import etree
s = open("zastepstwa.html", "r")
table = etree.HTML(s.read()).find("body/table")
rows = iter(table)
headers = [col.text for col in next(rows)]
teachers, lessons, classes, lessons, classrooms, deputies, information = [], [], [], [], [], [], []
i = 0
for row in rows:
    values = [col.text for col in row]
    lessons.append(values[0])
    teachers.append(values[1])
    classes.append(values[2])
    lessons.append(values[3])
    classrooms.append(values[4])
    deputies.append(values[5])
    information.append(values[6])
    i=+1


# fields
print(lessons[0])
print(teachers[0])
print(classes[0])
print(lessons[0])
print(classrooms[0])
print(deputies[0])
print(information[0])

fields = {"teachers": teachers, "lessons": lessons}
print(fields["teachers"][1:])
# print(fields["lessons"][1:])

