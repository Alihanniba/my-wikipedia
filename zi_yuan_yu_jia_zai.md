# 资源预加载
预加载是浏览器对将来可能被使用资源的一种暗示，一些资源可以在当前页面使用到，一些可能在将来的某些页面中被使用。作为开发人员，我们比浏览器更加了解我们的应用，所以我们可以对我们的核心资源使用该技术。

**细分为几个不同的技术：DNS-prefetch、subresource和标准的prefetch、preconnect、prerender。**

___
##DNS 预解析 DNS-Prefetch
___
通过 DNS 预解析来告诉浏览器未来我们可能从某个特定的 URL 获取资源，当浏览器真正使用到该域中的某个资源时就可以尽快地完成 DNS 解析。例如，我们将来可能从alihanniba.com获取图片或音频资源，那么可以在文档顶部的```<head>```标签中加入以下内容：

```
<link rel="dns-prefetch" href="//alihanniba.com">
```

当我们从该 URL 请求一个资源时，就不再需要等待 DNS 的解析过程。该技术对使用第三方资源特别有用。


##预连接 Preconnect
___
与 DNS 预解析类似，preconnect不仅完成 DNS 预解析，同时还将进行 TCP 握手和建立传输层协议。可以这样使用：

```
<link rel="preconnect" href="http://alihanniba.com"> 
```
