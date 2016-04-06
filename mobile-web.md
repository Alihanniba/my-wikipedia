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

<p data-height="176" data-theme-id="0" data-slug-hash="QNOzqW" data-default-tab="html" data-user="alihanniba" class="codepen">See the Pen <a href="http://codepen.io/alihanniba/pen/QNOzqW/">QNOzqW</a> by alihanniba (<a href="http://codepen.io/alihanniba">@alihanniba</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

###忽略将页面中的数字识别为电话号码

<p data-height="194" data-theme-id="0" data-slug-hash="QNOzqW" data-default-tab="html" data-user="alihanniba" class="codepen">See the Pen <a href="http://codepen.io/alihanniba/pen/QNOzqW/">QNOzqW</a> by alihanniba (<a href="http://codepen.io/alihanniba">@alihanniba</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>


###忽略Android平台中对邮箱地址的识别

<p data-height="190" data-theme-id="0" data-slug-hash="QNOzqW" data-default-tab="html" data-user="alihanniba" class="codepen">See the Pen <a href="http://codepen.io/alihanniba/pen/QNOzqW/">QNOzqW</a> by alihanniba (<a href="http://codepen.io/alihanniba">@alihanniba</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>


###当网站添加到主屏幕快速启动方式，可隐藏地址栏，仅针对ios的safari

<p data-height="200" data-theme-id="0" data-slug-hash="QNOzqW" data-default-tab="html" data-user="alihanniba" class="codepen">See the Pen <a href="http://codepen.io/alihanniba/pen/QNOzqW/">QNOzqW</a> by alihanniba (<a href="http://codepen.io/alihanniba">@alihanniba</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

###将网站添加到主屏幕快速启动方式，仅针对ios的safari顶端状态条的样式



###viewport模板——通用

<p data-height="268" data-theme-id="0" data-slug-hash="QNOzqW" data-default-tab="html" data-user="alihanniba" class="codepen">See the Pen <a href="http://codepen.io/alihanniba/pen/QNOzqW/">QNOzqW</a> by alihanniba (<a href="http://codepen.io/alihanniba">@alihanniba</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

###viewport模板 - target-densitydpi=device-dpi，android 2.3.5以下版本不支持

<p data-height="268" data-theme-id="0" data-slug-hash="QNOzqW" data-default-tab="html" data-user="alihanniba" class="codepen">See the Pen <a href="http://codepen.io/alihanniba/pen/QNOzqW/">QNOzqW</a> by alihanniba (<a href="http://codepen.io/alihanniba">@alihanniba</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>


#常见问题
###移动端如何定义字体font-family
中文字体使用系统默认即可，英文用Helvetica

<p data-height="146" data-theme-id="0" data-slug-hash="QNOzqW" data-default-tab="css" data-user="alihanniba" class="codepen">See the Pen <a href="http://codepen.io/alihanniba/pen/QNOzqW/">QNOzqW</a> by alihanniba (<a href="http://codepen.io/alihanniba">@alihanniba</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
































