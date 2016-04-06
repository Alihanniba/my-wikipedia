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

###移动端字体单位font-size选择px还是rem

对于只需要适配少部分手机设备，且分辨率对页面影响不大的，使用px即可

对于需要适配各种移动设备，使用rem，例如只需要适配iPhone和iPad等分辨率差别比较挺大的设备

rem配置参考:

```
html{font-size:10px}
@media screen and (min-width:321px) and (max-width:375px){html{font-size:11px}}
@media screen and (min-width:376px) and (max-width:414px){html{font-size:12px}}
@media screen and (min-width:415px) and (max-width:639px){html{font-size:15px}}
@media screen and (min-width:640px) and (max-width:719px){html{font-size:20px}}
@media screen and (min-width:720px) and (max-width:749px){html{font-size:22.5px}}
@media screen and (min-width:750px) and (max-width:799px){html{font-size:23.5px}}
@media screen and (min-width:800px){html{font-size:25px}}
```

###移动端touch事件(区分webkit 和 winphone)

当用户手指放在移动设备在屏幕上滑动会触发的touch事件

**以下支持webkit**

* touchstart——当手指触碰屏幕时候发生。不管当前有多少只手指
* touchmove——当手指在屏幕上滑动时连续触发。通常我们再滑屏页面，会调用event的preventDefault()可以阻止默认情况的发生：阻止页面滚动
* touchend——当手指离开屏幕时触发
* touchcancel——系统停止跟踪触摸时候会触发。例如在触摸过程中突然页面alert()一个提示框，此时会触发该事件，这个事件比较少用

**TouchEvent**

* touches：屏幕上所有手指的信息
* targetTouches：手指在目标区域的手指信
* changedTouches：最近一次触发该事件的手指信息
* touchend时，touches与targetTouches信息会被删除，changedTouches保存的最后一次的信息，最好用于计算手指信息

**参数信息(changedTouches[0])**

* clientX、clientY在显示区的坐标
* target：当前元素

参考:[https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent](https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent)


###移动端click屏幕产生200-300 ms的延迟响应

移动设备上的web网页是有300ms延迟的，玩玩会造成按钮点击延迟甚至是点击失效。

以下是历史原因，来源一个公司内一个同事的分享：

2007年苹果发布首款iphone上IOS系统搭载的safari为了将适用于PC端上大屏幕的网页能比较好的展示在手机端上，使用了双击缩放(double tap to zoom)的方案，比如你在手机上用浏览器打开一个PC上的网页，你可能在看到页面内容虽然可以撑满整个屏幕，但是字体、图片都很小看不清，此时可以快速双击屏幕上的某一部分，你就能看清该部分放大后的内容，再次双击后能回到原始状态。

双击缩放是指用手指在屏幕上快速点击两次，iOS 自带的 Safari 浏览器会将网页缩放至原始比例。

原因就出在浏览器需要如何判断快速点击上，当用户在屏幕上单击某一个元素时候，例如跳转链接，此处浏览器会先捕获该次单击，但浏览器不能决定用户是单纯要点击链接还是要双击该部分区域进行缩放操作，所以，捕获第一次单击后，浏览器会先Hold一段时间t，如果在t时间区间里用户未进行下一次点击，则浏览器会做单击跳转链接的处理，如果t时间里用户进行了第二次单击操作，则浏览器会禁止跳转，转而进行对该部分区域页面的缩放操作。那么这个时间区间t有多少呢？在IOS safari下，大概为300毫秒。这就是延迟的由来。造成的后果用户纯粹单击页面，页面需要过一段时间才响应，给用户慢体验感觉，对于web开发者来说是，页面js捕获click事件的回调函数处理，需要300ms后才生效，也就间接导致影响其他业务逻辑的处理。

**解决方案：**

* fastclick可以解决在手机上点击事件的300ms延迟
* zepto的touch模块，tap事件也是为了解决在click的延迟问题

###触摸事件的响应顺序
```
1、ontouchstart 
2、ontouchmove 
3、ontouchend 
4、o'clock
```

解决300ms延迟的问题，也可以通过绑定ontouchstart事件，加快对事件的响应

###什么是Retina 显示屏，带来了什么问题

retina：一种具备超高像素密度的液晶屏，同样大小的屏幕上显示的像素点由1个变为多个，如在同样带下的屏幕上，苹果设备的retina显示屏中，像素点1个变为4个

在高清显示屏中的位图被放大，图片会变得模糊，因此移动端的视觉稿通常会设计为传统PC的2倍

那么，前端的应对方案是：

设计稿切出来的图片长宽保证为偶数，并使用backgroud-size把图片缩小为原来的1/2

```
//例如图片宽高为：200px*200px，那么写法如下
.css{width:100px;height:100px;background-size:100px 100px;}
```
其它元素的取值为原来的1/2，例如视觉稿40px的字体，使用样式的写法为20px

参考[《高清显示屏原理及设计方案》](http://www.cnblogs.com/PeunZhang/p/3441110.html)

###ios系统中元素被触摸时产生的半透明灰色遮罩怎么去掉
ios用户点击一个链接，会出现一个半透明灰色遮罩, 如果想要禁用，可设置-webkit-tap-highlight-color的alpha值为0，也就是属性值的最后一位设置为0就可以去除半透明灰色遮罩

```
a,button,input,textarea{-webkit-tap-highlight-color: rgba(0,0,0,0;)}
```

###部分android系统中元素被点击时产生的边框怎么去掉

android用户点击一个链接，会出现一个边框或者半透明灰色遮罩, 不同生产商定义出来额效果不一样，可设置-webkit-tap-highlight-color的alpha值为0去除部分机器自带的效果

```
a,button,input,textarea{
-webkit-tap-highlight-color: rgba(0,0,0,0;)
-webkit-user-modify:read-write-plaintext-only; 
}
```
-webkit-user-modify有个副作用，就是输入法不再能够输入多个字符

另外，有些机型去除不了，如小米2

对于按钮类还有个办法，不使用a或者input标签，直接用div标签


参考[《如何去除android上a标签产生的边框》](http://www.cnblogs.com/PeunZhang/archive/2013/02/28/2907708.html)

###webkit表单元素的默认外观怎么重置

```
.css{-webkit-appearance:none;}
```

###webkit表单输入框placeholder的颜色值能改变么

```
input::-webkit-input-placeholder{color:#AAAAAA;}
input:focus::-webkit-input-placeholder{color:#EEEEEE;}
```
###webkit表单输入框placeholder的文字能换行么
ios可以，android不行~

在textarea标签下都可以换行~

###IE10（winphone8）表单元素默认外观如何重置

**禁用 select 默认下拉箭头**

::-ms-expand 适用于表单选择控件下拉箭头的修改，有多个属性值，设置它隐藏 (display:none) 并使用背景图片来修饰可得到我们想要的效果。

```
select::-ms-expand {
display: none;
}

```
**禁用 radio 和 checkbox 默认样式**

::-ms-check 适用于表单复选框或单选按钮默认图标的修改，同样有多个属性值，设置它隐藏 (display:none) 并使用背景图片来修饰可得到我们想要的效果。

```
input[type=radio]::-ms-check,input[type=checkbox]::-ms-check{
    display: none;
}
```
**禁用PC端表单输入框默认清除按钮**

当表单文本输入框输入内容后会显示文本清除按钮，::-ms-clear 适用于该清除按钮的修改，同样设置使它隐藏 (display:none) 并使用背景图片来修饰可得到我们想要的效果。

```
input[type=text]::-ms-clear,input[type=tel]::-ms-clear,input[type=number]::-ms-clear{
    display: none;
}
```

###禁止ios 长按时不触发系统的菜单，禁止ios&android长按时下载图片

```
.css{-webkit-touch-callout: none}
```
###禁止ios和android用户选中文字

```
.css{-webkit-user-select:none}
```
参考[《如何改变表单元素的外观(for Webkit and IE10)》](http://www.cnblogs.com/PeunZhang/p/3522603.html)


































