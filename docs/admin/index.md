# 后台 开发指南

# 目录
[[toc]]

## 关于
这个是使用dcat-admin的package来开发的 [dcat-admin文档](https://learnku.com/docs/dcat-admin/2.x)

## 路由设定
```php
Route::get('/', function () {
    return redirect('/admin');
});
```

## 有关的环境变量
```bash
#控制是否要log admin user的actions
ADMIN_LOG_TOGGLE=false
#代码生成器开关
ADMIN_HELPER_TOGGLE=true
```

## 关于一些常用功能
1. [列的使用和扩展](https://learnku.com/docs/dcat-admin/2.x/use-and-extension-of-columns/8090)
2. [列的显示和扩展](https://learnku.com/docs/dcat-admin/2.x/display-and-expansion-of-columns/8091)
3. [行的使用和扩展](https://learnku.com/docs/dcat-admin/2.x/use-and-extension-of-rows/8092)
4. [表单基本使用](https://learnku.com/docs/dcat-admin/2.x/basic-use/8105)
5. [动作基本使用](https://learnku.com/docs/dcat-admin/1.x/basic-use/8124)
6. [代码生成器](https://learnku.com/docs/dcat-admin/2.x/basic-use/8140#8b8ca1)

## 一些已经生成的Action功能
如何生成action 可以看 [动作基本使用](https://learnku.com/docs/dcat-admin/1.x/basic-use/8124)

![动作](/images/admin_actions.png)