from flask import Blueprint,render_template,url_for
from ..models import psql_db,AuthUser
import time

main = Blueprint('main', __name__)

# 网站首页
@main.route('/')
def index():
    textp1 = time.ctime(time.time())
    auth_user = AuthUser()
    text1 = 10
    text2 = auth_user.get()
    text2 = auth_user.select()
    text1 = text2
    # psql_db.connect()
    # cursor = psql_db.execute_sql('select * from pg_stat_activity;')
    # for row in cursor.fetchall():
    #     print(row)
    # time.sleep(10)
    textp2 = time.ctime(time.time())
    return render_template('main/zh-CN/home.html',textp1=textp1,text1=text1,textp2=textp2)

# 网站产品页
@main.route('/product')
def product():
    return render_template('main/zh-CN/product.html')

@main.before_request
def _db_connect():
    psql_db.connect()

@main.teardown_request
def _db_close(exc):
    if not psql_db.is_closed():
        psql_db.close()