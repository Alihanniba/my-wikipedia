# 自己遇到的移动web资源整理
自2015年进去前端领域,接触到移动端,至今,简单做一下总结,首先要了解下移动web带来的问题
* 设备更新换代快-低端机遗留问题,小米红米等手机兼容适配问题
* 国内浏览器众多,杂乱--导致的兼容问题
* 网络复杂--导致的页面的代开速度长短不一
* 低端机性能问题
* HTML5新技术--新特性兼容问题
* HTML5嵌套进webview各种坑爹的问题

So ,现在把这些遇到的问题总结下来,以防以后踩坑.

###H5页面窗口自动调整带设备宽度,并禁止用户缩放页面

```
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
```

###忽略将页面中的数字识别为电话号码

```
<meta name="format-detection" content="telephone=no" />
```

###忽略Android平台中对邮箱地址的识别

```
<meta name="format-detection" content="email=no" />
```

###当网站添加到主屏幕快速启动方式，可隐藏地址栏，仅针对ios的safari

```
<meta name="apple-mobile-web-app-capable" content="yes" />
```
 * ios7.0版本以后，safari上已看不到效果



###将网站添加到主屏幕快速启动方式，仅针对ios的safari顶端状态条的样式

```
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
```
 * 可选default、black、black-translucent





###viewport模板——通用

```
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no" name="viewport">
<meta content="yes" name="apple-mobile-web-app-capable">
<meta content="black" name="apple-mobile-web-app-status-bar-style">
<meta content="telephone=no" name="format-detection">
<meta content="email=no" name="format-detection">
<title>标题</title>
<link rel="stylesheet" href="index.css">
</head>

<body>
这里开始内容
</body>

</html>
```

###viewport模板 - target-densitydpi=device-dpi，android 2.3.5以下版本不支持

```
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=750, user-scalable=no, target-densitydpi=device-dpi"> width取值与页面定义的宽度一致 -->
<meta content="yes" name="apple-mobile-web-app-capable">
<meta content="black" name="apple-mobile-web-app-status-bar-style">
<meta content="telephone=no" name="format-detection">
<meta content="email=no" name="format-detection">
<title>标题</title>
<link rel="stylesheet" href="index.css">
</head>

<body>
这里开始内容
</body>
```

#常见问题
###移动端如何定义字体font-family
中文字体使用系统默认即可，英文用Helvetica
* /* 移动端定义字体的代码 */

```
body{font-family:Helvetica;}
```
参考《[移动端使用字体的思考](http://www.cnblogs.com/PeunZhang/p/3592096.html)》































