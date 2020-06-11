#!/usr/bin/python
#
# Returns a list of HTML Elements from Mozilla

import requests
import html
from bs4 import BeautifulSoup

url = "https://developer.mozilla.org/en-US/docs/Web/HTML/Element"

page = requests.get(url)
soup = BeautifulSoup(page.content,'html.parser')

codes = set()
for code in soup.find_all('code'):
    c = html.unescape(code.text)
    if c.startswith("<") and not(" " in c) and not("/" in c) and not(c == "<h1>–<h6>"):
        codes.add(c[1:-1])

elements = list(codes)
elements.sort()

for element in elements:
    print(element)
