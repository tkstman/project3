"""`main` is the top level module for your Flask application."""

# Import the Flask Framework
from flask import Flask
from flask import render_template
app = Flask(__name__)
# Note: We don't need to call run() since our application is embedded within
# the App Engine WSGI application server.


@app.route('/')
def hello():
    """Return a friendly HTTP greeting."""
    return 'Hello World!'

@app.route('/cardsp')
def cardsp(name=None):
    """Return a friendly HTTP greeting."""
    return render_template('cardsp.html',name=name)
  
@app.route('/cards')
def cards(name=None):
    """Return a friendly HTTP greeting."""
    return render_template('cards.html',name=name)
  
@app.route('/cardtry')
def cardtry(name=None):
    """Return a friendly HTTP greeting."""
    return render_template('cardtry.html',name=name)

@app.errorhandler(404)
def page_not_found(e):
    """Return a custom 404 error."""
    return 'Sorry, Nothing at this URL.', 404


@app.errorhandler(500)
def page_not_found(e):
    """Return a custom 500 error."""
    return 'Sorry, unexpected error: {}'.format(e), 500
