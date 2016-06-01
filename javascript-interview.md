# Javascript


### 几条Javascript的基本规范

* 不要在同一行声明多个变量
* 请使用===/!==来比较true/false或者数值
* 使用对象字面量替代new Array这种形式
* 不要使用全局函数
* Switch语句必须带有default分支
* 函数不应该有时候有返回值,有时候没返回值
* For循环必须有大括号
* IF语句必须是有大括号
* for-in循环中的变量 应该使用var关键字明确限制作用域,从而避免作用域污染

###eval是干嘛的?

	它的功能是把对应的字符串解析成JS代码并运行

	应该避免使用eval,不安全,非常耗性能(2次,一次解析成js语句,一次执行).

### 一个通用的事件侦听器函数
```js
markyun.Event = {
	//页面加载完成后
	readyEvent: function(fn) {
		if (fn == null) {
			fn = document;
		}
		var oldonload = window.onload;
		if (typeof window.onload != 'function') {
			window.onload = fn;
		} else {
			window.onload = function () {
				oldonload();
				fn();
			};
		}
	},
	
	addEvent: function(element, type, handler) {
		if (element.addEventListener) {
			element.addEventListener(type, handler, false);
		} else if (element.attachEvent) {
			element.attachEvent('on' + type, function() {
				handler.call(element);
			});
		} else {
			element['on' + type] = handler;
		}
	},
	
	//移除事件
	removeEvent: function(element,type,handler) {
		if (element.removeEventListener) {
			element.removeEventListener(type,handler,false);
		} else if (element.datachEvent) {
			element.datachEvent('on' + type, handler);
		} else {
			element['on' + type] = null;
		}
	},
	
	//阻止事件(主要是事件冒泡,因为IE不支持事件捕获)
	stopPropagation: function(ev) {
		if (ev.stopPropagation) {
			ev.stopPropagation();
		} else {
			ev.cancelBubble = true;
		}
	},
	
	//取消事件的默认行为
	preventDefault: function(event) {
		if (event.preventDefault) {
			event.preventDefault();
		} else {
			event.returnValue = false;
		}
	},
	
	//获取事件目标
	getTarget: function (event) {
		return event.target || event.srcElement;
	},
	
	//获取event对象的引用,取到事件的所有信息,确保随时能使用event;
	getEvent: function(e) {
		var ev = e || window.event;
		if (!ev) {
			var c = this.getEvent.caller;
			while (c) {
				ev = c.arguments[0];
				if (ev && Event == ev.constructor) {
					break;
				}
				c = c.caller;
			}
		}
		return ev;
	}
}

```

### Node的适用场景
	
	高并发,聊天,实时消息推送
	
### 如何创建一个对象?
```
	function Person(name, age) {
		this.name = name;
		this.age = age;
		this.thing = function () {
			alert(this.name);
		}
	}
```

### 谈谈This对象的理解

	this是js的一个关键字,随着函数使用场合不同,this的值会发生变化.
	
	但是有一个总原则,那就是this指的是调用函数的那个对象.
	
	this一般情况下:是全局对象Global.作为方法调用,那么this就是指向这个对象
	

### 什么是闭包(closure),为什么要用它?
	执行alert667()后,alert667()闭包内部函数的内部变量不会存在,
	
	使得javascript的垃圾回收机制GC不会回收alert667()所占用的资源
	
	因为alert667()的内部函数的执行需要依赖alert667()中的变量.
	
	这是对闭包作用 的非常直白的描述
	
	```
		function alert667 () {
			var num = 667;
			var alertNum = function () {
				alert(num);
			}
			num++;
			return alert667(); 
		}
		
		var alertNum = alert667();
		alertNum();
	
	```
	
	
### 如何判断一个对象是否属于某个类?
```
	if (a instanceof Person) {
		alert('alihanniba');
	}
```

### new 操作符具体干了什么?
* 创建了一个空对象,并且this变量引用该对象,同事还继承了该函数的原型.
* 属性和方法被加入到this引用的对象中
* 新创建的对象由this所引用,并且最后隐式的返回this

```
var obj = {};
obj.__proto__ = Base.prototype;
Base.call(obj);
```

###针对jquery的优化方法
* 基于class的选择器的性能相对于ID选择器的开销很大,因为需要遍历所有DOM元素
* 频繁操作DOM,可以先缓存起来再操作,用jquery链式调用更好.
	* 比如: var str = $("a").attr("href");
* for循环建议先用个变量来存储需要遍历的数组的大小


### 如何判断当前脚本是运行在浏览器还是node环境中?
	通过判断Global对象是否为window,如果不为window,当前脚本没有运行在浏览器中
	

###如何解决跨域问题
* **jsonp**
	
	原理是: 动态插入script标签,通过script标签引入一个js文件,这个js文件载入成会执行我们在url参数中指定的函数,并且会把我们需要的json数据作为参数传入
	
	由于同源策略的限制,XmlHttpRequest只允许请求当前源(域名,协议,端口)的资源,为了实现跨域请求,可以通过script标签实现跨域请求,然后在服务端输出json数据并执行回调函数,从而解决跨域的数据请求
	
	优点是兼容性好,简单易用,支持浏览器与服务器双向通信,缺点只支持GET请求
	
	JSONP: json+padding,就是把json装进一个盒子里
	
	```script
	<script>
		function createJs(sUrl) {
			var oScript = document.createElement('script');
			oScript.type = 'text/javascript';
			oScript.src = sUrl;
			document.getElementsByTagName('head')[0].appendChild(oScript);
		}
		createJs('jsonp.js');
		
		box({
			'name': 'test'
		});
		
		function box (json) {
			alert(json.name);
		}
	</script>
	
	```
	
* **CORS**


	服务器端对于cors的支持,主要是通过Access-Control-Allow_Origin来进行的.如果浏览器检测到相应的设置,就可以允许Ajax进行跨域的访问.
	
* **通过修改document.domain来跨子域**


	将子域和主域的document.domain设为同一个主域.前提条件:这两个域名必须属于同一个基础域名!而且所有的协议,端口都要一致,否则无法利用document.domain进行跨域.
	
* **使用window.name来进行跨域**

	window对象有个name属性,该属性有个特征:即在一个窗口(window)的生命周期内,窗口载入的所有页面都是共享一个window.name的,每个页面对window.name都有读写的权限,window.name是持久存在一个窗口载入过的所有页面中的
	
###XML和JSON的区别

		(1) 数据体积方面
	
		JSON相对于XML来讲,数据的体积更小,传递的速度更快
		
		(2) 数据交互方面
		
		JSON与Javascript的交互更加方便,更容易解析处理,更好的数据交互
		
		(3) 数据描述方面
		
		JSON对数据的描述性比XML较差
		
		(4) 传输速度方面
		
		JSON的速度要远远快于XML
		
###说说TCP传输的三次握手四次挥手策略

		为了准确无误的把数据送达目标处,TCP协议采用了三次握手策略.用TCP协议把数据包送出去后,TCP不会对传送后的情况置之不理,它一定不会向对方确认是否成功送达.握手过程中使用了TCP的标志:SYN和ACK.
		
		发送端首先发送一个带SYN标志的数据包给对方.接收端收到数据后,回传一个带有SYN/ACK标志的数据包已示传达确认信息.最后发送端再回传一个带ACK标志的数据包,代表握手结束.若在握手过程中某个阶段莫名中断,TCP协议会再次以相同的顺序发送相同的数据包.
	
* **断开一个TCP连接则需要四次握手**

	* 第一次挥手：主动关闭方发送一个FIN，用来关闭主动方到被动关闭方的数据传送，也就是主动关闭方告诉被动关闭方：我已经不 会再给你发数据了(当然，在fin包之前发送出去的数据，如果没有收到对应的ack确认报文，主动关闭方依然会重发这些数据)，但是，此时主动关闭方还可 以接受数据。
	
	* 第二次挥手：被动关闭方收到FIN包后，发送一个ACK给对方，确认序号为收到序号+1（与SYN相同，一个FIN占用一个序号）
	
	* 第三次挥手：被动关闭方发送一个FIN，用来关闭被动关闭方到主动关闭方的数据传送，也就是告诉主动关闭方，我的数据也发送完了，不会再给你发数据了。

	* 第四次挥手：主动关闭方收到FIN后，发送一个ACK给被动关闭方，确认序号为收到序号+1，至此，完成四次挥手。


* **TCP与UDP的区别**
	
	* TCP（Transmission Control Protocol，传输控制协议）是基于连接的协议，也就是说，在正式收发数据前，必须和对方建立可靠的连接。一个TCP连接必须要经过三次“对话”才能建立起来

	* UDP（User Data Protocol，用户数据报协议）是与TCP相对应的协议。它是面向非连接的协议，它不与对方建立连接，而是直接就把数据包发送过去！ UDP适用于一次只传送少量数据、对可靠性要求不高的应用环境。
	
	
### 对作用域链的理解
		
		作用域链的作用是保证执行环境的有权访问的变量和函数是有序的,作用域链的变量只能向上访问,变量访问到window对象即终止,作用域链向下访问变量是不被允许的.
		
### 创建ajax过程

		(1)创建XMLHttpRequest对象,也就是创建一个异步调用对象
		(2)创建一个新的HTTP请求,并指定该HTTP请求的方法,UTL及验证信息
		(3)设置响应HTTP请求状态变化的函数
		(4)发送HTTP请求
		(5)获取异步调用返回的数据
		(6)使用javascript和DOM实现局部刷新

### 常见web安全防护原理
		
* **sql注入**

	就是通过把SQL命令插入到web表单递交或输入域名或页面请求的查询字符串,最终达到欺骗服务器执行恶意的SQL命令.
	
	* 1.永远不要信任用户的输入，要对用户的输入进行校验，可以通过正则表达式，或限制长度，对单引号和双"-"进行转换等。

  * 2.永远不要使用动态拼装SQL，可以使用参数化的SQL或者直接使用存储过程进行数据查询存取。

  * 3.永远不要使用管理员权限的数据库连接，为每个应用使用单独的权限有限的数据库连接。

  * 4.不要把机密信息明文存放，请加密或者hash掉密码和敏感的信息。
	
* **XSS原理及防范**

	Xss(cross-site scripting)攻击指的是攻击者往Web页面里插入恶意 html标签或者javascript代码。比如：攻击者在论坛中放一个看似安全的链接，骗取用户点击后，窃取cookie中的用户私密信息；或者攻击者在论坛中加一个恶意表单，当用户提交表单的时候，却把信息传送到攻击者的服务器中，而不是用户原本以为的信任站点。
	
* **XSS防范方法**

	* 首先代码里对用户输入的地方和变量都需要仔细检查长度和对”<”,”>”,”;”,”’”等字符做过滤；其次任何内容写到页面之前都必须加以encode，避免不小心把html tag 弄出来。这一个层面做好，至少可以堵住超过一半的XSS 攻击。

	* 首先，避免直接在cookie 中泄露用户隐私，例如email、密码等等。其次，通过使cookie 和系统ip 绑定来降低cookie 泄露后的危险。这样攻击者得到的cookie 没有实际价值，不可能拿来重放。

	* 如果网站不需要再浏览器端对cookie 进行操作，可以在Set-Cookie 末尾加上HttpOnly 来防止javascript 代码直接获取cookie 。

	* 尽量采用POST 而非GET 提交表单

	
* **XSS与CSRF的区别**

	XSS是获取信息,不需要提前知道其他用户页面的 代码和数据包.CSRF是代替用户完成指定的动作,需要知道其他用户页面的代码和数据包
	
	要完成一次CSRF攻击,受害者必须依次完成两个步骤:
	  
	  		登陆受信任网站,并在本地生成cookie
	  		在不登出A的情况下,访问危险网站B
	
	CSRF的防御
			
	*	服务端的CSRF方式很多,但总的思想是一致的,就是在客户端页面增加伪随机数.
	* 通过验证码的方法

### web worker 和 websocket

	worker主线程
		
* 1.通过worker = new Worker(url)加载一个js文件来创建一个worker,同时返回一个worker实例
* 2.通过worker.postMessage(data)方法来像worker发送数据
* 3.绑定worker.onmessage方法来接受worker发送过来的数据
* 使用worker.terminate()来终止一个worker的执行

WebSocket是Web应用程序的传输协议，它提供了双向的，按序到达的数据流。他是一个HTML5协议，WebSocket的连接是持久的，他通过在客户端和服务器之间保持双工连接，服务器的更新可以被及时推送给客户端，而不需要客户端以一定时间间隔去轮询。
	
	
###HTTP和HTTPS

HTTP协议通常承载于TCP协议之上，在HTTP和TCP之间添加一个安全协议层（SSL或TSL），这个时候，就成了我们常说的HTTPS。

默认HTTP的端口号为80，HTTPS的端口号为443。
	

###为什么HTTPS安全 

因为网络请求需要中间有很多的服务器路由器的转发。中间的节点都可能篡改信息，而如果使用HTTPS，密钥在你和终点站才有。https之所以比http安全，是因为他利用ssl/tls协议传输。它包含证书，卸载，流量转发，负载均衡，页面适配，浏览器适配，refer传递等。保障了传输过程的安全性


### 性能优化

* 代码层面:避免使用css表达式,避免使用高级选择器,通配选择器
* 缓存利用:缓存ajax,使用CDN,使用外部js和css文件以便缓存,添加Expires头,服务器配置Etag,减少DNS查找等
* 请求数量:合并样式和脚本,使用css图片精灵,初始首屏之外的图片资源按需加载,静态资源延迟加载
* 请求带宽:压缩文件,开启GZIP

* **代码层面的优化**

	* 用hash-table来优化查找
	* 少用全局变量
	* 用innerHTML代替DOM操作,减少DOM操作次数,优化javascript性能
	* 用setTimeout来避免页面失去响应
	* 缓存DOM节点查找的结果
	* 避免使用css  Expression
	* 避免全局查询
	* 避免使用with(with会创建自己的作用域,会增加作用域链长度)
	* 多个变量声明合并
	* 避免图片和iframe等的空src,空sec会重新加载当前页面,影响速度和效率
	* 尽量避免写在HTML标签中写style属性 
	
	(看雅虎14条性能优化原则)
	
	* 减少http请求次数,css sprites ,js css 源码压缩,图片大小控制合适;网页gzip,cdn托管,data缓存,图片服务器
	* 前端模板js+数据,减少由html标签导致的带宽浪费,前端用变量保存ajax请求结果,每次操作本地变量,不用请求,减少请求次数
	* innerHTML代替DOM操作,较少DOM操作次数,优化javascript性能
	* 当需要设置的样式很多时设置className而不是直接操作style
	* 少用全局变量,缓存dom节点查找的结果,减少io读取操作
	* 避免使用css expression(css表达式)又称dynamix properties(动态属性)
	* 图片预加载,讲样式表放在顶部,讲脚本放在底部,加上时间戳
	* 避免在页面的主题布局中使用table,table要等其中的内容完全下载之后才会显示出来,显示比div+css布局慢.

对普通网站有一个统一的思路,就是尽量向前端优化,减少数据库操作,减少磁盘io.向前端优化指的是,在不影响功能和体验的情况下 ,能在浏览器执行的不要在服务器端执行,能在缓存服务器上直接返回的不要在应用服务器,程序能直接取得的结果不要到外部取得,本机内能取到的数据不要到远程取,内存能取到的不要到磁盘取,缓存中有的不要去数据库查询,减少数据库操作指减少更新次数,缓存结果减少查询次数
	
### 移动端性能优化

* 尽量使用CSS3动画,开启硬件加速
* 适当使用touch时间代替click事件
* 避免使用css3渐变阴影效果
* 可以用transform:translateZ(0)来开启硬件加速
* 不滥用float.float在渲染是计算量比较大,尽量减少使用
* 不滥用web字体.web字体需要下载,解析,重绘当前页面,尽量减少使用
* 合理使用requestAnimationFrame动画代替setTimeout
* css中的属性(css3 transtions.css3 3d transforms.opacity.canvas.webgl.video)会触发GPU渲染,请合理使用.过度使用会引发手机过耗电增加
* pc端的在移动端的同样适用

### 什么是Etag？

当发送一个服务器请求时，浏览器首先会进行缓存过期判断。浏览器根据缓存过期时间判断缓存文件是否过期。

情景一：若没有过期，则不向服务器发送请求，直接使用缓存中的结果，此时我们在浏览器控制台中可以看到 200 OK(from cache) ，此时的情况就是完全使用缓存，浏览器和服务器没有任何交互的。

情景二：若已过期，则向服务器发送请求，此时请求中会带上①中设置的文件修改时间，和Etag

然后，进行资源更新判断。服务器根据浏览器传过来的文件修改时间，判断自浏览器上一次请求之后，文件是不是没有被修改过；根据Etag，判断文件内容自上一次请求之后，有没有发生变化

情形一：若两种判断的结论都是文件没有被修改过，则服务器就不给浏览器发index.html的内容了，直接告诉它，文件没有被修改过，你用你那边的缓存吧—— 304 Not Modified，此时浏览器就会从本地缓存中获取index.html的内容。此时的情况叫协议缓存，浏览器和服务器之间有一次请求交互。

情形二：若修改时间和文件内容判断有任意一个没有通过，则服务器会受理此次请求，之后的操作同1

1. 只有get请求会被缓存，post请求不会

###Expires和Cache-Control

Expires要求客户端和服务端的时钟严格同步。HTTP1.1引入Cache-Control来克服Expires头的限制。如果max-age和Expires同时出现，则max-age有更高的优先级。

```
    Cache-Control: no-cache, private, max-age=0

    ETag: abcde

    Expires: Thu, 15 Apr 2016 20:00:00 GMT

    Pragma: private

    Last-Modified: $now // RFC1123 format
```

###ETag应用:

Etag由服务器端生成，客户端通过If-Match或者说If-None-Match这个条件判断请求来验证资源是否修改。常见的是使用If-None-Match。请求一个文件的流程可能如下：

====第一次请求===

	1.客户端发起 HTTP GET 请求一个文件；

	2.服务器处理请求，返回文件内容和一堆Header，当然包括Etag(例如"2e681a-6-5d044840")(假设服务器支持Etag生成和已经开启了Etag).状态码200
====第二次请求===

	客户端发起 HTTP GET 请求一个文件，注意这个时候客户端同时发送一个If-None-Match头，这个头的内容就是第一次请求时服务器返回的Etag：2e681a-6-5d0448402.服务器判断发送过来的Etag和计算出来的Etag匹配，因此If-None-Match为False，不返回200，返回304，客户端继续使用本地缓存；流程很简单，问题是，如果服务器又设置了Cache-Control:max-age和Expires呢，怎么办
	
答案是同时使用，也就是说在完全匹配If-Modified-Since和If-None-Match即检查完修改时间和Etag之后，

服务器才能返回304.(不要陷入到底使用谁的问题怪圈)

为什么使用Etag请求头?

Etag 主要为了解决 Last-Modified 无法解决的一些问题。


### 对Node的优点和缺点提出自己的看法
* (优点)因为Node是基于事件驱动和无阻赛的,所以非常适合处理并发请求,因此构建在Node上的代理服务器相比其他技术实现(如ruby)的服务器表现要好得多.此外,与Node代理服务器交互的客户端代码是由javascript写的,因此客户端和服务器端都是用同一种语言编写,这是非常美妙的事情.
* (缺点)Node是一个相对新的开源项目,所以不太稳定,总是一直在变,而且缺少足够多的第三方库支持.	

###一个页面从输入URL到页面加载显示完成,这个过程中都发生了什么?
	
* 查找浏览器缓存
* DNS解析,查找该域名对应的IP地址,重定向(301),发出第二个GET请求
* 进行HTTP协议会话
* 客户端发送报头(请求报头)
* 服务端回馈报头(响应报头)
* HTML文档开始下载
* 文档树建立,根据标记请求所需要制定MIME类型的文件
* 文件显示

浏览器做的工作分为这几步:

* 加载:根据请求的URL进行域名解析,向服务器发起请求,接收文件(HTML JS CSS 图像等)
* 解析:对加载到的资源(HTML JS CSS等)进行语法解析,建立相应的内部数据结构(比如HTML的DOM树,JS的(对象)属性表,CSS的样式规则等等) 


###平时管理自己的项目
* 先期团队必须确定好全局样式(globe.css),编码格式(utf-8)等;
* 编写习惯必须一致(例如都是采用继承式的写法,单样式都写成一行);
* 标注样式编写人,各模块都及时标注(标注关键样式调用的地方);
* 页面进行标注(例如页面模块开始和结束);
* CSS 和 HTML分文件夹并行存放,命名都得统一(例如style.css);
* JS分文件夹存放,命名以该JS功能为准的英文翻译
* 图片采用整合的images.png png8格式文件使用,尽量整合在一起使用方便将来的管理







	
---
![](alihanniba.png)

	