from bs4 import BeautifulSoup

soup = BeautifulSoup(open("C:\\zastepstwa.html"), "html.parser")

for table_row in soup.findAll('tr'):
    columns = table_row.findAll('td')
    output_row = []
    for column in columns:
        print(column.text)

