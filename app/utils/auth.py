from flask import jsonify
from flask import request
from flask import current_app

def _auth_get_user_real_ip():
    """获取用户真实ip
    """
    if request.headers.getlist('X-Forwarded-For'):
        ip = request.headers.getlist('X-Forwarded-For')[0]
    elif request.headers.get('X-Real-IP'):
        ip = request.headers.get('X-Real-IP')
    else:
        ip = request.remote_addr
    
    return ip

def _auth_jwt_encode(header=None, payload=None, private_key=None):
    ret = {'type':'err','data':None,'test':None}

    if payload == None:
        ret['data'] = '_auth_jwt_encode()函数，payload参数等于None'
        return jsonify(ret)
    
    return jsonify(ret)