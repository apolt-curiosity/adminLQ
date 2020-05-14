from flask import Blueprint
from flask import render_template
from flask import url_for

main = Blueprint('main', __name__, url_prefix='/admin')

@main.route('/')
def admin_index():
    return render_template('admin.html')
    