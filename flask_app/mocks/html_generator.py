import codecs
from faker import Faker
from jinja2 import Template

from random import choice, randint

fake = Faker("pl_PL")


def generate_names(amount: int = 20) -> list:
    names = []
    for _ in range(amount):
        name = fake.name()
        if len(name.split(" ")) > 2:
            name = " ".join(name.split(" ")[1:])
        names.append(name)
    return names


GROUPS = ["3E", "1C|N1", "1GB", "2Z", "1A", "4D", "2A|1/2"]
LESSONS = ["Niemiecki", "Programowanie", "Fajny przedmiot", "Zażółć"]
ROOMS = [str(randint(20, 40)) for i in range(20)] + ["SG1", "@"]
TEACHERS = generate_names(10)


def render(subs):
    with codecs.open("mocks/template.html", "r", "utf-8") as f:
        template = Template(f.read())

    return template.render(subs=subs)


def generate_subs(n=30):
    return [
        {
            "lesson_number": randint(0, 7),
            "regular_teacher": choice(TEACHERS),
            "group": choice(GROUPS),
            "lesson_name": choice(LESSONS),
            "room": choice(ROOMS),
            "substitute_teacher": choice(
                TEACHERS
                + ["Uczniowie przychodzą później", "Uczniowie zwolnieni do domu"]
            ),
        }
        for i in range(n)
    ]


if __name__ == "__main__":
    subs = generate_subs()
    print(render(subs))
