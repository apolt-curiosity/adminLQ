import time
import threading

import peewee
from playhouse.pool import PooledPostgresqlExtDatabase


# db = peewee.PostgresqlDatabase(
#     'adminlq',  # Required by Peewee.
#     user='postgres',  # Will be passed directly to psycopg2.
#     password='chq7wyf632',  # Ditto.
#     host='127.0.0.1')  # Ditto.
class myThread (threading.Thread):   #继承父类threading.Thread
    def __init__(self, threadID, name, counter):
        threading.Thread.__init__(self)
        self.threadID = threadID
        self.name = name
        self.counter = counter
    def run(self):                   #把要执行的代码写到run函数里面 线程在创建后会直接运行run函数 
        print ("Starting " + self.name)
        print_time(self.name, self.counter)
        print ("Exiting " + self.name)


db = PooledPostgresqlExtDatabase(
    'adminlq',
    max_connections=2,
    stale_timeout=300,  # 5 minutes.
    timeout=0,
    password='chq7wyf632',
    host='127.0.0.1',
    user='postgres')


def print_time( threadName, delay):
    db.connect()
    count = 0
    while count < 1:
      time.sleep(delay)
      count += 1
      print ('%s: %s' % ( threadName, time.ctime(time.time()) ))
    db.close()

thread1 = myThread(1, "Thread-1", 10)
thread2 = myThread(2, "Thread-2", 10)
thread3 = myThread(3, "Thread-3", 10)

thread1.start()
thread2.start()
thread3.start()


a = input()