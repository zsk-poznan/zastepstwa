"""
This file contains all functions and helpers to serve data
through the flask API.
"""

from mocks.constants import DISMISSED_LESSON_NAMES


def filter_dismissed_lessons(teachers: list) -> list:
    """
    When a lesson is dismissed there is information about it in the `teacher` field.
    This function removes these "teachers" from teachers list.
    """

    return list(filter(lambda teacher: teacher not in DISMISSED_LESSON_NAMES, teachers))


def create_sub(sub: list) -> dict:
    """
    This function convert list to dict representing the substitution.
    """
    return {
        "lesson_id": sub[0],
        "teacher": sub[1],
        "group": sub[2],
        "lesson_name": sub[3],
        "classroom": sub[4],
        "notes": sub[5],
    }
