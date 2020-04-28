import multiprocessing

# 绑定运行的主机及端口
bind = '127.0.0.1:6866'

# 并行工作进程数，建议的数量为当前的CPU核数*2 + 1
workers = multiprocessing.cpu_count() * 2 + 1

# 工作模式，默认为sync
# gevent模式适合计算机在I/O受限情况下使用
# worker_class = 'gevent'

# worker-connections是对于gevent工作模式的特殊设置
# 设置每个worker最大的并发请求数量
# 假如CPU仅有一核，将会使用3个worker。最大的并发请求数量是3*1000=3000。
# worker_connections = 1000

# 进程运行方式（如交给supervisor管理，必须设置成False）
daemon = False

# 日志路径
# 日志信息设置成标准输出，交给supervisor管理
accesslog = '-'
errorlog = '-'
