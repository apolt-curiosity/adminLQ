from time import time

from flask import Blueprint
from flask import jsonify
from flask import redirect
from flask import url_for
from flask import request
from flask import current_app
from flask import make_response
from authlib.jose import jwt

from ..models import AuthUser
from ..models import _db_adminlq_connect
from ..models import _db_adminlq_close

authority = Blueprint('authority', __name__, url_prefix='/admin/authority')

authority.before_request(_db_adminlq_connect)
authority.teardown_request(_db_adminlq_close)

# rsa_public_key = current_app.config['RSA_PUBLIC_KEY']
# rsa_private_key = current_app.config['RSA_PRIVATE_KEY']

@authority.route('/')
def get_cookies():
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
    
    
   
    
    rsa_public_key = current_app.config['RSA_PUBLIC_KEY']
    
    s = request.cookies.get('jwt')
    claims = jwt.decode(s, rsa_public_key)
    
    return jsonify(claims)

@authority.route('/set')
def set_cookie():
    # cookie参数
    path = current_app.config['SET_COOKIE_PATH']
    domain = current_app.config['SET_COOKIE_DOMAIN']
    secure = current_app.config['SET_COOKIE_SECURE']
    httponly = current_app.config['SET_COOKIE_HTTPONLY']
    samesite = current_app.config['SET_COOKIE_SAMESITE']
    max_age = current_app.config['SET_COOKIE_SIX_DAYS']
    expires = time() + max_age

    # jwt参数
    header = current_app.config['JWT_HEADER']
    rsa_private_key = current_app.config['RSA_PRIVATE_KEY']

    payload = {'iss': 'adminlq', 'sub': 'chq', 'user':'flq'}
    jwt_value = jwt.encode(header, payload, rsa_private_key)

    resp = make_response(redirect(url_for('authority.get_cookie')))

    key = 'jwt'
    value = jwt_value
    resp.set_cookie(
        key,
        value=value,
        max_age=max_age,
        expires=expires,
        path=path,
        domain=domain,
        secure=secure,
        httponly=httponly,
        samesite=samesite
    )

    return resp
