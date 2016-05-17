# CSS

### 标准的css盒子 模型?低版本IE的盒子模型有啥不同?

	(1)有两种, IE盒子模型,w3c盒子模型
	(2)盒模型: 内容(content),填充(padding),边界(margin),边框(border);
	(3)区别: IE的content部分把border和padding计算了进去
	
### css选择符有哪些?哪些属性可以继承?
	
		1.id选择器(#id)
		2.类选择器(.className)
		3.标签选择器(div,h1,p)
		4.相邻选择器(h1 + p)
		5.子选择器(ul > li)
		6.后代选择器(li a)
		7.通配符选择器( * )
		8.属性选择器(a[rel = "external"])
		9.伪类选择器(a:hover,li:nth-child)
		
		可继承的样式: 
				font-size
				font-family
				clolr
				ul
				li
				dl
				dd
				dt
		
		不可继承的样式:
				border
				padding
				margin
				width
				height

###css优先算法如何计算

	优先级就近原则,同权重情况下样式定义最近者为准;
	载入样式以最后载入的定位为准
	优先级为:
			
			
			!important > id > class > tag
			important 比内联优先级高					
---
![](alihanniba.png)
