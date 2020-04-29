from flask import Blueprint,current_app,jsonify
from authlib.jose import jwt

from ..models import AuthUser,_db_adminlq_connect,_db_adminlq_close

authority = Blueprint('authority', __name__, url_prefix='/admin/authority')

authority.before_request(_db_adminlq_connect)
authority.teardown_request(_db_adminlq_close)

# rsa_public_key = current_app.config['RSA_PUBLIC_KEY']
# rsa_private_key = current_app.config['RSA_PRIVATE_KEY']

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
    
    payload = {'iss': 'adminlq', 'sub': 'test', 'test':'kdj'}
   
    header = current_app.config['JWT_HEADER']
    rsa_public_key = current_app.config['RSA_PUBLIC_KEY']
    rsa_private_key = current_app.config['RSA_PRIVATE_KEY']
    s = jwt.encode(header, payload, rsa_private_key)
    claims = jwt.decode(s, rsa_public_key)
    
    return jsonify(claims)

@authority.route('/set')
def set_jwt():
    return 'setjwt'
