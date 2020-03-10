from flask import Flask

def create_app(config_name='config.default'):
    """创建和配置flask对象
     
    :param config_name:普通配置文件的路径
    :return:Flask对象
    """
    app = Flask(__name__, instance_relative_config=True)
    
    # 读取普通配置文件，默认为config文件夹下default.py文件
    app.config.from_object(config_name)

    # 从instance文件夹读取特殊配置文件config.py
    app.config.from_pyfile('config.py')

    # 蓝图注册
    from .views.main import main
    app.register_blueprint(main)

    # 404错误处理
    def page_not_found(Exception):
        return '404!!!'
    app.register_error_handler(404, page_not_found)
    
    return app