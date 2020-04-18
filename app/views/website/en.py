from flask import Blueprint,render_template,url_for

en = Blueprint('en', __name__,url_prefix='/en')

@en.route('/')
def index():
    return render_template('website/en/home.html')

@en.route('/product/')
def product():
    return render_template('website/en/product.html')