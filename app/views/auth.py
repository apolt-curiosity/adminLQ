from time import time

from flask import Blueprint
from flask import jsonify
from flask import redirect
from flask import url_for
from flask import request
from flask import current_app
from flask import make_response
from flask import render_template
from authlib.jose import jwt

from ..models import AuthUser
from ..models import _db_adminlq_connect
from ..models import _db_adminlq_close
from ..utils import _auth_get_user_real_ip
from ..utils import _auth_jwt_encode

auth = Blueprint('auth', __name__, url_prefix='/admin/auth')

auth.before_request(_db_adminlq_connect)
auth.teardown_request(_db_adminlq_close)



@auth.route('/')
def get_cookie():
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
    
    try:
        claims = jwt.decode(s, rsa_public_key)
        claims.validate()
    except Exception as e:
        return str(e)
    
    return jsonify(claims)

@auth.route('/vue')
def vue_test():
    return render_template(url_for('static', filename='dist/index.html'))

@auth.route('/set')
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
    # iss: jwt签发者
    payload = {
        'iss': 'adminlq',
        'sub': 'chq',
        'exp': int(time() + 10),
        'user':'flq'
    }

    
    jwt_value = jwt.encode(header, payload, rsa_private_key)

    resp = make_response(redirect(url_for('auth.get_cookie')))

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

@auth.route('/ip')
def get_ip():
    return _auth_jwt_encode()