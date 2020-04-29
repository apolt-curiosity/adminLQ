from authlib.jose import jwt

with open('/home/curiosity/adminLQ/instance/rsa/public.pem', 'rb') as f:
    key = f.read()
    print(type(key))
    print(key)


