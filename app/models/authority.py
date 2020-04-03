from peewee import CharField
from peewee import TextField
from peewee import IntegerField
from peewee import BigIntegerField

from . import BaseModel

class AuthUser(BaseModel):
    class Meta:
        table_name = 'auth_user'

    username = CharField(primary_key=True,max_length=128)
    nickname = CharField(max_length=128)
    password = TextField()
    access_token = TextField()
    user_type = CharField(max_length=32)
    user_type_id = IntegerField()
    state = CharField(max_length=32)
    last_login_date = BigIntegerField()
    last_login_ip = TextField()
    registration_date = BigIntegerField()
    registration_ip = TextField()
    comment = TextField()