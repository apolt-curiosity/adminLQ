import multiprocessing

bind = '127.0.0.1:8000'
workers = multiprocessing.cpu_count() * 2 + 1
backlog = 2048
worker_class = 'gevent'
worker_connections = 1000
daemon = False
debug = False
proc_name = 'gunicorn_service'
timeout = 30
accesslog = '/home/curiosity/Templates/log/gunicorn/access.log'
errorlog = '/home/curiosity/Templates/log/gunicorn/error.log'