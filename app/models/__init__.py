from peewee import *

from .config import DATABASE,USER,PASSWORD,HOST

# Postgresql数据库初始化
psql_db = PostgresqlDatabase(DATABASE, user=USER, password=PASSWORD, host=HOST)

class BaseModel(Model):
    class Meta:
        database = psql_db

from .authority import *