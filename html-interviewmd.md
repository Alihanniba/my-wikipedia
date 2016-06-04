#HTML
### 1 . Doctype作用?标准模式与兼容模式各有什么区别?

	(1). <Doctype>声明位于html文档中的第一行,处于<html>标签之前,告知浏览器的解析器用什么文档标准解析这个文档.<Doctype>不存在或格式不正确会导致文档以兼容模式呈现.

	(2).标准模式的排版和js运作模式都是以浏览器支持的最高标准运行.在兼容模式中,页面以宽松的向后兼容的方式显示,模拟老式浏览器的行为以防止站点无法工作.

### 2 . HTML5为什么只需要写<!DOCTYPE HTML>?


  * HTML不基于SGML,因此不需要对DTD进行引用,但是需要doctype来规范浏览器的行为(让浏览器按照他们应该的方式来运行).

  * 而HTML4.01基于SGML,所以需要对DTD进行引用,才能告知浏览器文档所使用的文档类型 .

### 3 . 行内元素有哪些?块级元素有哪些?空(VOID)元素有哪些?

  首先:css规范规定,每个元素都有display属性,确定该元素的类型,每个元素都有默认的display值,如div的display默认值为"block",则为"块级元素";span默认display属性为"inline",是行内元素.

    (1)行内元素有: a span img input select strong(强调的语气)

    (2)块级元素有: div ul li o dl dt dd h1 h2 h3 h4 ... p

    (3)常见的空元素: br hr img input link meta

    鲜为人知的是:
    area base col comand embed keygen param source track wbr

### 4 . 页面导入样式时,使用link和@import有什么区别?
	(1)link属于XHTML标签,除了加载css外,还能用于定义RSS,定义rel连接属性等作用;而@import是CSS提供的,只能用于加载CSS;

	(2)页面被加载时,link会同时加载,而@import引用的css会等到页面被加载完在加载;

	(3)import是css2.1提出的,只在IE5以上才能被识别,尔link是XHTML标签,无兼容问题;

### 5 . 介绍一下你对浏览器内核的理解?

	主要分成两部分:渲染引擎(layout engineer或REndering Engine)和JS引擎

	渲染引擎: 负责取得网页的内容(HTML,XML,图像等),整理讯息(例如加入CSS等),以及计算网页的显示方式,然后会输出至显示器或打印机.浏览器的内核的不同对于网页的语法解释会有不同,所以渲染的效果也不相同.所以网页浏览器,电子邮件客户端以及其他需要编辑,显示网络内容的应用程序都需要内核.

	JS引擎: 解析和执行javascript来实现网页的动态效果

	最开始渲染引擎和js引擎并没有区分的很明确,后来js引擎越来越独立,内核就倾向于只指渲染引擎.

### 6 .  常见的浏览器内核有哪些?
	Trident内核:IE,Maxthon,TT,The World,360,搜狗浏览器等.[又称MSHTML]

	Gecko内核: Netscape6及以上版本,FF,MozillaSuite/SeaMonkey等

	Presto内核: Opera7及以上.   [Opera内核原为: Presto,现为: Blink]

	Webkit内核: Safari,Chrome等.    [Chrome的: Blink(WebKit的分支)]

###7 .  HTML5有哪些新特性,移除了哪些元素?如何处理HTML5新标签的浏览器兼容问题?如何区分HTML和HTML5?

	* HTML5现在已经不是SGML的子集,主要 是关于图像,位置,存储,多任务等功能的增加.

		绘画 canvas;

		用于媒介回访的video和audio元素;

		本地离线存储localStorage长期存储数据,浏览器关闭后数据不丢失;

		sessionStorage的数据在浏览器关闭后自动删除;

		语义化更好的内容元素,比如
			article,footer,header,nav,section;

		表单控件
			calendar, date ,time ,email,url,search;

		新的技术
			webworker,websocket,Geolocation;

	* 移除的元素:

		纯表现的元素:
			basefont,font,center,big,s,strike,tt,u;

		对可用性产生负面影响的元素:
			frame,frameset,noframes;

	* 如何区分HTML5： DOCTYPE声明\新增的结构元素\功能元素
###8 . 简述一下你对HTML语义化的理解?

		用正确的标签做正确的事情.

		html语义化让页面的额内容结构化,结构更清晰,便于对浏览器,搜索引擎解析;

		即使在没有样式css情况下也以一种文档格式显示,并且是容易阅读的;

		搜索引擎的爬虫也依赖与HTML标记来确定上下文和各个关键字的权重,利于DEO;

		使阅读源代码的人对网站更容易将网站分块,便于阅读维护理解.

###9 . 请描述一下cookies,sessionStorage和localStorage的区别?

		cookie是网站为了标示用户身份而储存在用户本地终端(Client Side)上的数据(通常经过加密).

		cookie数据始终字啊同源的http请求中携带(即使不需要),记住在浏览器和服务器间来回传递.

		sessionStorage和localStorage不会自动把数据发给服务器,仅在本地保存.

		存储大小：

    		cookie数据大小不能超过4k。  
    		sessionStorage和localStorage 虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大。

		有期时间：

    		localStorage    存储持久数据，浏览器关闭后数据不丢失除非主动删除数据；
    		sessionStorage  数据在当前浏览器窗口关闭后自动删除
    		cookie  设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭

###10 . 如何实现浏览器内多个标签页之间的通信?
		WebSocket、SharedWorker；

		也可以调用localstorge、cookies等本地存储方式；

		localstorge另一个浏览上下文里被添加、修改或删除时，它都会触发一个事件，

		我们通过监听事件，控制它的值来进行页面信息通信；

		注意quirks：Safari 在无痕模式下设置localstorge值时会抛出QuotaExceededError 的异常；

###11 . 页面可见性（Page Visibility API） 可以有哪些用途？
		通过 visibilityState 的值检测页面当前是否可见，以及打开网页的时间等;

		在页面被切换到其他后台进程的时候，自动暂停音乐或视频的播放；

###12 . title与h1的区别、b与strong的区别、i与em的区别？
		title属性没有明确意义只表示是个标题，H1则表示层次明确的标题，对页面信息的抓取也有很大的影响；

		strong是标明重点内容，有语气加强的含义，使用阅读设备阅读网络时：<strong>会重读，而<B>是展示强调内容。

		i内容展示为斜体，em表示强调的文本；

		Physical Style Elements -- 自然样式标签
			b, i, u, s, pre
		Semantic Style Elements -- 语义样式标签
			strong, em, ins, del, code
		应该准确使用语义样式标签, 但不能滥用, 如果不能确定时首选使用自然样式标签

###13.前端需要注意哪些SEO
* 合理的title,description,keyword:搜索对这三项的权重逐个减小,title值强调重点即可,重要关键词出现不要超过2次,而且要靠前,不同页面title要有所不同;description吧页面内容高度概括,长度合适,不可过分堆砌关键词,不同页面description有所不同;keywords列举出重要关键词即可
* 语义化的HTML代码,符合W3C规范:语义化代码让搜索引擎容易理解网页
* 重要内容HTML代码放在最前:搜索引擎抓取HTML顺序是从上到下,有的搜索引擎对抓取长度有限制,保证重要内容一定会被抓取
* 重要内容不要用js输出:爬虫不会执行js获取内容
* 少用iframe:搜索引擎不会抓取iframe中的内容
* 非装饰性图片必须加alt
* 提高网站速度:网站速度是搜索引擎排序的一个重要指标


### display:block;和display:inline;的区别
* block元素特点:

	* 处于常规流中时，如果width没有设置，会自动填充满父容器
	* 可以应用margin/padding 
	* 在没有设置高度的情况下会扩展高度以包含常规流中的子元素
	* 处于常规流中时布局时在前后元素位置之间（独占一个水平空间）
	* 忽略vertical-align

* inline元素特点
	
	* 水平方向上根据direction依次布局
	* 不会在元素前后进行换行 
	* 受white-space控制
	* margin/padding在竖直方向上无效，水平方向上有效
	* width/height属性对非替换行内元素无效，宽度由元素内容决定
	* 非替换行内元素的行框高由line-height确定，替换行内元素的行框高由height,margin,padding,border决定
	* 浮动或绝对定位时会转换为block
	* vertical-align属性生效
	
	




---
![](alihanniba.png)
