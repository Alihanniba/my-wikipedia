# Javascript

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

	
	
---
![](alihanniba.png)

	