from flask import Blueprint,render_template,url_for

main = Blueprint('main', __name__)

# 网站首页
@main.route('/')
def index():
    return render_template('main/zh-CN/home.html',textp='ddd')

# 网站产品页
@main.route('/product')
def product():
    return render_template('main/zh-CN/product.html')