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


###css新增伪类有哪些?

	p:first-of-type  选择属于其父元素的首个<p>元素的每个<p>元素
	p:last-of-type   选择属于其父元素的最后<p>元素的每个<p>元素
	p:only-of-type   选择属于其父元素唯一的<p>元素的每个<p>元素
	p:only-child     选择属于其父元素唯一子元素的每个<p>元素
	p:nth-child(2)   选择属于其父元素的第二个子元素的每个<p>元素

	:after      	 在元素之前添加内容,也可以用来清除浮动
	:before			 在元素之后添加内容
	:enabled		 
	:disabled		 控制表单控件的禁用状态
	:checked		 单选框或复选框被选中

###如何居中div?如何居中一个浮动元素?如何让绝对定位的div居中?

	* 给div设置一个宽度,然后添加margin:0 auto属性
	* 居中一个浮动元素
		```
			top:
			left:
			margin-top:
			margin-left:
		```
	* 让绝对定位的div居中
		```
			position: absolute;
			width:1200px;
			background:none;
			margin:0 auto;
			top:0;
			left:0;
			bottom:0;
			right:0;
		```

###display有哪些值?请说明他们的作用.

	block		像块元素一样显示
	none		缺省值,像行内元素类型一样显示
	inline-block像行内元素一样显示,但其内容像块元素一样显示
	list-item	像块元素一样显示,并添加样式列表标记
	table 		次元素会作为块级表格来显示
	inherit		规定应该从父元素继承displa属性的值

###position的值relative和absolute定位原点是?

	* absolute
		生成绝对定位的元素,相对于值不为static的第一个父元素进行定位
	* fixed
		(老ie不支持)
	* relative
		生成相对定位的元素,相对于其正常位置进行定位
	* static
		默认值.没有定位,元素出现在正常的流中(忽略top,bottom,left,right,z-index等声明)
	* inherit
		规定从父元素继承position属性的值

###css3有哪些新属性
	* 新增的各种css选择器 (:not(.input):所有class不是"input"的节点)
	* 圆角			(border-radius:)
	* 多列布局		(multi-column layout)
	* 阴影和反射		(shadow \ reflect)
	* 文字特效		(text-shadow)
	* 文字渲染		(text-decoration)
	* 线性渐变		(gradient)
	* 旋转		 (transform)
	* 增加了旋转,缩放,定位,倾斜,动画,多背景
		```
			transform:scale(0.85,0.90)
						translate(0px,-30px)
						skew(-9deg,0deg)
		```
###用纯css创建一个三角形的原理是什么?

	把上,左,右三条边影藏掉(颜色为 transparent)
	```
	#demo {
		width: 0;
		height: 0;
		border-width: 20px;
		border-style: solid;
		border-color: transparent transparent red transparent;
	}
	```

###Chrome 中文界面下默认会将小于 12px 的文本强制按照 12px 显示,
   可通过加入 CSS 属性
   ```
   -webkit-text-size-adjust: none;
   ```
   解决。


###如果需要手动写动画，你认为最小时间间隔是多久，为什么？（阿里）

	* 多数显示器默认频率是60Hz，即1秒刷新60次，所以理论上最小间隔为1/60＊1000ms ＝ 16.7ms

###什么是CSS 预处理器 / 后处理器？

 	* 预处理器例如：LESS、Sass、Stylus，用来预编译Sass或less，增强了css代码的复用性，还有层级、mixin、变量、循环、函数等，具有很方便的UI组件模块化开发能力，极大的提高工作效率。

 	* 后处理器例如：PostCSS，通常被视为在完成的样式表中根据CSS规范处理CSS，让其更有效；目前最常做的是给CSS属性添加浏览器私有前缀，实现跨浏览器兼容性的问题。





---
![](alihanniba.png)
