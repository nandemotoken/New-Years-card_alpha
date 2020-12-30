import os

from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
  f = open( "test.txt" , 'w')
  f.write('test')
  f.close()
  return 'make file'
