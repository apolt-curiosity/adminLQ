from flask import Blueprint

main = Blueprint('main', __name__)

# 网站首页
@main.route('/')
def index():
    return 'index2'

# 网站产品页
@main.route('/product')
def product():
    return 'product'