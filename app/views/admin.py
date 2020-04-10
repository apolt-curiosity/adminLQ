import time

from flask import Blueprint,render_template,url_for,jsonify

from ..models import psql_db,AuthUser


admin = Blueprint('admin', __name__, url_prefix='/admin')

@admin.route('/t/')
def tt():
    textp1 = time.ctime(time.time())
    auth_user = AuthUser()
    text2 = auth_user.get()
    # text2 = auth_user.select()
    text1 = text2
    # psql_db.connect()
    # cursor = psql_db.execute_sql('select * from pg_stat_activity;')
    # for row in cursor.fetchall():
    #     print(row)
    # time.sleep(10)
    textp2 = time.ctime(time.time())
    tt = {
        'textp1':textp1,
        'textp2':textp2,
        'textc1':text1
    }
    return jsonify(tt)

@admin.before_request
def _db_connect():
    psql_db.connect()

@admin.teardown_request
def _db_close(exc):
    if not psql_db.is_closed():
        psql_db.close()