# HTTP Header

###HTTP Header 详解
HTTP(HyperTextTransferProtocol)即超文本传输协议,目前网页传输的通用协议.HTTP协议采用了请求/相应模型,浏览器或其他客户端发出请求,服务器给出响应.就整个网络资源传输而言,包括message-header和message-body两部分.首先传递message-header,即http header消息.http header消息通常被分成4个部分:genaral header,request header,response header, entity header.但是这种分法就理解而言,感觉界限不太明确,根据维基百科对http header 内容的组织形式,大体分为request 和 response 两部分.





---

##Request 部分
___

| Header | 解释 | 示例 |
| -- | -- | -- |
| Accept | 指定客户端能够接受到的内容类型 | Accept:text/plain,text/html |
| Accept-Charset | 浏览器可以接受的字符串编码集 | Accept-Charset:iso-8859-5 |
| Accept-Encoding | 指定浏览器可以支持的web服务器返回内容压缩编码类型 | Accept-Language:en,zh |
| Accept-Ranges | 浏览器可接受的语言 | Accept-Ranges:bytes |
| Authorization | HTTP授权的授权证书 | Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ== |
| Cache-Control | 指定请求和响应遵循的缓存机制 | Cache-Control:no-cache |
| Connection | 表示是否需要持久连接.(HTTP1.1默认进行持久连接) | Connection:close |
| Cookie | HTTP请求发送时,会把保存在该请求域名下的所有cookie值一起发送给web服务器. | Cookie:$Version=1;Skin=new; |
| Content-Length | 请求的内容长度 | Content-Length:348 |
| Content-Type | 请求的与实体对应的MIME信息 | Content-Type:application/c-www-form-urlencoded |
| Date | 请求发送的日期与时间 | Date:Tue ,15 Nov 2010 08:12:31 GMT |
| Expect | 请求的特定的服务器行为 | Expext:100-continue |
| From | 发出请求的用户的Email | Form:www.alihanniba.com |
| Host | 指定请求的域名的域名与端口号 | Host: www.alihanniba.com |
| If-Match | 只有请求内容与实体相匹配才有效 | If-Match: “737060cd8c284d8af7ad3082f209582d” |
| If-Modified-Since | 如果请求的部分在指定时间之后被修改则请求成功,未被修改则返回304代码 | If-Modified-Since: Sat, 29 Oct 2010 19:43:31 GMT |
| If-None-Match | 如果 内容未改变则返回304代码,参数为服务器先前发送的Etag,与服务器回应的Etag比较判断是否改变 | If-None-Match: “737060cd8c284d8af7ad3082f209582d” |
| If-Range | 如果实体未改变,服务器发送客户端丢失的部分,否则发送整个实体.参数也为Etag | If-Range: “737060cd8c284d8af7ad3082f209582d” |
| If-Unmodified-Since | 只在实体在指定时间之后未被修改才请求成功 | If-Unmodified-Since: Sat, 29 Oct 2010 19:43:31 GMT |
| Max-Forward | 限制信息通过代理和网关传送的时间 | Max-Forwards:10 |
| Pragma | 用来包含实现特定的指令 | Progma:no-cache |
| Proxy-Authorization | 连接到代理的授权证书 | Proxy-Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ== |
| Range | 只请求实体的一部分,指定范围 | Range:bytes=500-999 |
| Referer | 先前网页的地址,当前请求网页紧随其后,即来路 | Referer: https://www.alihanniba.com |
| TE | 客户端愿意接受的传输编码,并通知服务器接受接受尾加头信息 | TE:trailes,deflate;q=0.5 |
| Upgrade | 向服务器指定某种传输协议以便服务器进行转换(如果支持) | Upgrade: HTTP/2.0, SHTTP/1.3, IRC/6.9, RTA/x11 |
| User-Agent | User-Agent的内容包含发出请求的用户信息 | User-Agent:Mozilla/5.0(linux;X11) |
| Via | 通知中间网关或代理服务器地址,通信协议  | Via: 1.0 fred, 1.1 nowhere.com (Apache/1.1) | 
| Warning | 关于消息实体的警告信息 | Warn:199 Miscellaneous warning | 


___



##Response 部分
___


| Header | 解释 | 示例 |
| -- | -- | -- |
| Accept-Ranges | 表明服务器是否支持指定范围请求及哪种类型的分段请求 | Accept-Ranges:bytes |
| Age | 从原始服务器到代理缓存形成的估算时间(以秒计,非负) | Age:12 |
| Allow | 对某网络资源的有效的请求行为,不允许则返回405 | Allow:GET,HEAD |
| Cache-Control | 告诉所有的缓存机制是否可以缓存及哪种类型 | Cache-Control:no-cache |
| Content-Encoding | web服务器支持的返回内容压缩编码类型. | Content-Encoding:gzip |
| Content-Language | 响应体的语言 | Content-Language:en,zh |
| CContent-Language:en,zhContent-Language:en,zh | 1:8 | 2:8 |
| 0:9 | 1:9 | 2:9 |
| 0:10 | 1:10 | 2:10 |
| 0:11 | 1:11 | 2:11 |
| 0:12 | 1:12 | 2:12 |
| 0:13 | 1:13 | 2:13 |
| 0:14 | 1:14 | 2:14 |
| 0:15 | 1:15 | 2:15 |
| 0:16 | 1:16 | 2:16 |
| 0:17 | 1:17 | 2:17 |
| 0:18 | 1:18 | 2:18 |
| 0:19 | 1:19 | 2:19 |
| 0:20 | 1:20 | 2:20 |
| 0:21 | 1:21 | 2:21 |
| 0:22 | 1:22 | 2:22 |
| 0:23 | 1:23 | 2:23 |
| 0:24 | 1:24 | 2:24 |
| 0:25 | 1:25 | 2:25 |
| 0:26 | 1:26 | 2:26 |
| 0:27 | 1:27 | 2:27 |
| 0:28 | 1:28 | 2:28 |
| 0:29 | 1:29 | 2:29 |
| 0:30 | 1:30 | 2:30 |


