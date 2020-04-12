from time import sleep

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# 本次已爬取的文件数
total_files = 0

# 浏览器设置
geckodriver = '/usr/local/share/geckodriver'
options = webdriver.FirefoxOptions()
# options.add_argument('-headless')
driver = webdriver.Firefox(executable_path=geckodriver, firefox_options=options)

driver.get('https://www.baidu.com/')

# 等待网页异步加载完成，目标元素LM_list，PDF_box
def WebPageExpectedElementWait(timeout=60, element=None):
    if element == None:
        print('WebPageExpectedElementWait()函数缺少element参数！')
        return False

    try:
        wait = WebDriverWait(driver, timeout)
        wait.until(EC.visibility_of_element_located((By.CLASS_NAME,element)))
    except:
        print('WebPageExpectedElementWait()函数发生异常！')
        return False
    else:
        sleep(1)
        return True

driver.get('http://wenshu.court.gov.cn/website/wenshu/181107ANFZ0BXSK4/index.html?docId=50d200b95a224b249505ab9200c36dff')

print('开始异步加载')
WebPageExpectedElementWait(element='PDF_box')

print(driver.page_source)

tmp = input()
print(tmp)

driver.close()