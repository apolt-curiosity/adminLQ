from flask import Blueprint,render_template

es_es = Blueprint('es_es', __name__, url_prefix='/es')

@es_es.route('/')
def index():
    return render_template('website/es_es/home.html')

@es_es.route('/product/')
def product():
    return render_template('website/es_es/product.html')