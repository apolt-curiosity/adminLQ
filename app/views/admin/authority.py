from flask import Blueprint,jsonify

from ...models import AuthUser,_db_adminlq_connect,_db_adminlq_close

authority = Blueprint('authority', __name__, url_prefix='/admin/authority')

authority.before_request(_db_adminlq_connect)
authority.teardown_request(_db_adminlq_close)

@authority.route('/')
def ttt():
    auth_user = AuthUser()
    ret = {'1':1,'2':2}
    i = 1
    for user in auth_user.select().dicts():
        if i == 1:
            ret['1'] = user
            i = i+1
        if i == 2:
            ret["2"] = user
            break
    return jsonify(ret)


