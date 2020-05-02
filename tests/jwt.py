from datetime import datetime,timedelta
from time import time
from time import sleep

from authlib.jose import jwt


header = {'alg': 'RS256', 'typ': 'JWT'}

with open('/home/curiosity/adminLQ/instance/rsa/public.pem', 'rb') as f:
    rsa_public_key = f.read()
    print('PUBLIC KEY:')
    print(rsa_public_key)

with open('/home/curiosity/adminLQ/instance/rsa/private.pem', 'rb') as f:
    rsa_private_key = f.read()
    print('private KEY:')
    print(rsa_private_key)
print('TIME BEFORE:')
print(datetime.utcnow())
print(time())
payload = {"exp":datetime.utcnow() + timedelta(seconds=10)}

jwt_value = jwt.encode(header, payload, rsa_private_key)


print('JWT VALUE:')
print(jwt_value)

sleep(3)

print('TIME AFTER:')
print(datetime.utcnow())
print(time())

claims = jwt.decode(jwt_value, rsa_public_key)
print('CLAIMS:')
print(claims)
claims.validate()
input()

