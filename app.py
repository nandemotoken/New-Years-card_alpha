import os

from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
  f = open( "test.txt" , 'a')
  f.writelines( request.args.get('address') + "\n" )
  f.close()
  return 'make file'
