from peewee import *

# Postgresql数据库非初始化，仅定义
db_adminlq = PostgresqlDatabase(None)

def _db_adminlq_connect():
    db_adminlq.connect(reuse_if_open=True)

def _db_adminlq_close(exc):
    if not db_adminlq.is_closed():
        db_adminlq.close()

class BaseModel(Model):
    class Meta:
        database = db_adminlq

from .auth import AuthUser