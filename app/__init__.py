from flask import Flask

def create_app(config_name='config.flask'):
    """创建和配置flask对象  
    :param config_name:普通配置文件的路径   
    :return:Flask对象
    """
    app = Flask(__name__, instance_relative_config=True,static_url_path='/admin/static')
    
    # 读取普通配置文件，默认为config文件夹下default.py文件
    app.config.from_object(config_name)

    # 从instance文件夹读取特殊配置文件config.py
    app.config.from_pyfile('config.py')

    # 蓝图注册
    from .views.auth import auth
    app.register_blueprint(auth)

    from .views.main import main
    app.register_blueprint(main)

    # 数据库初始化
    name = app.config['DB_ADMINLQ_NAME']
    user = app.config['DB_ADMINLQ_USER']
    password = app.config['DB_ADMINLQ_PASSWORD']
    host = app.config['DB_ADMINLQ_HOST']

    from .models import db_adminlq
    db_adminlq.init(database=name,user=user,password=password,host=host)

    # 404错误处理
    def page_not_found(Exception):
        return 'Admin Error 404 ...'
    app.register_error_handler(404, page_not_found)

    return app