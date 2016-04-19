# Skills-100

### 1.js输出语句

```js
document.write("");
```
### 2. js中的注释为:
```js
//
```
### 3. 传统的HTML文档顺序是:
```js
document->html->(head,body)
```
### 4. 一个浏览器窗口中的DOM顺序是:
```js
window->(navigator,screen,history,location,document)
```
### 5. 得到表单中元素的名称和值:
```js
document.getElementById(“alihanniba”).name(或value)
```
### 6. 一个小写转大写的JS:
```js
document.getElementById(“output”).value = document.getElementById(“input”).value.toUpperCase();
```
### 7. JS中的值类型:
```js
String,Number,Boolean,Null,Object,Function
```
### 8. JS中的字符型转换成数值型:
```js
parseInt(),parseFloat()
```
### 9. JS中的数字转换成字符型:
```js
(“”+变量)
```
### 10. JS中的取字符串长度是:
```js
length
```
### 11. JS中的字符与字符相连接使用+号:

### 12. JS中的比较操作符有: ==等于,!=不等于,>,>=,<.<=:

### 13.JS中声明变量使用: var来进行声明

### 14.JS中的判断语句结构:
```js
if(condition) {

} else {

}
```

### 15.JS中的循环结构:
```js
for([initial e¬xpression];[condition];[upadte e¬xpression]) {
    inside loop
}
```

### 16.循环中止的命令是: 
```js
break
```

### 17.JS中的函数定义
```js
function alihanniba([parameter],…) {
    statement[s];
}
```

### 18.当文件中出现多个form表单时.可以用
```js
document.forms[0],document.forms[1]
```
来代替.
### 19.窗口
* 打开窗口:
```js
window.open();
```
* 关闭一个窗口:
```js
window.close();
```
* 窗口本身:
```js
self
```

### 20.状态栏的设置: 
```js
 window.status=”alihanniba”;
```

### 21.弹出提示信息:
```js
window.alert(“alihanniba”);
```

### 22.弹出确认框:
```js
window.confirm("alihanniba");
```

### 23.弹出输入提示框:
```js
window.prompt("alihanniba");
```

### 24.指定当前显示链接的位置::
```js
window.location.href=”www.alihanniba.com”;
```

### 25.取出窗体中的所有表单的数量:
```js
document.forms.length;
```
### 26.关闭文档的输出流:
```js
document.close();
```

### 27.字符串追加连接符:
```js
+=
```
### 28.创建一个文档元素:
```js
document.createElement();
document.createTextNode();
```

### 29.得到元素的方法:
```js
document.getElementById()
```

### 30.设置表单中所有文本型的成员的值为空:
```js
var form = window.document.forms[0];
for (var i = 0; i < form.length; i++){
    if (form[i].elements.type == “text”){
        form[i].elements.value = “”;
    }
}
```

### 31.复选按钮在JS中判断是否选中:
```js
document.forms[0].checkThis.checked (checked属性代表为是否选中返回TRUE或FALSE)
```

### 32.单选按钮组(单选按钮的名称必须相同):取单选按钮组的长度:
```js
document.forms[0].groupName.length;
```

### 33.单选按钮组判断是否被选中也是用checked.

### 34.下拉列表框的值:
```js
document.forms[0].selectName.options[n].value (n有时用下拉列表框名称加上.selectedIndex来确定被选中的值)
```

### 35.字符串的定义:
```js
var myString = new String(“This is lightsword”);
```

### 36 字符串转成大写:
```js
string.toUpperCase();
```
字符串转成小写:
```js
string.toLowerCase();
```

### 37.返回字符串2在字符串1中出现的位置:
```js
alihanniba1.indexOf(“alihanniba2”);

```
```js
alianniba1.indexOf(“alihanniba2”)!=-1则说明没找到
```
### 38.取字符串中指定位置的一个字符:
```js
alihanniba.charAt(9);
```

### 39.取出字符串中指定起点和终点的子字符串:
```js
alihanniba.substring(2,6);
```

### 40.数学函数:Math.PI(返回圆周率),Math.SQRT2(返回开方)
```js
Math.max(value1,value2)   返回两个数中的最在值,

Math.pow(value1,10)   返回value1的十次方,

Math.round(value1)   四舍五入函数,

Math.floor(Math.random()*(n+1))   返回随机数


```

### 41.定义日期型变量:
```js
var today = new Date();
```

### 42.日期函数列表:
```js
dateObj.getTime() 得到时间,

dateObj.getYear() 得到年份,

dateObj.getFullYear()得到四位的年份,

dateObj.getMonth()得到月份,

dateObj.getDate()得到日,

dateObj.getDay()得到日期几,

dateObj.getHours()得到小时,

dateObj.getMinutes()得到分,

dateObj.getSeconds()得到秒,

dateObj.setTime(value)设置时间,

dateObj.setYear(val)设置年,

dateObj.setMonth(val)设置月,

dateObj.setDate(val)设置日,

dateObj.setDay(val)设置星期几,

dateObj.setHours设置小时,

dateObj.setMinutes(val)设置分,

dateObj.setSeconds(val)设置秒 [注意:此日期时间从0开始计]
```


### 43.FRAME的表示方式:
```js
[window.]frames[n].ObjFuncVarName,frames[“frameName”].ObjFuncVarName,frameName.ObjFuncVarName
```

### 44.parent代表父亲对象,top代表最顶端对象:

### 45.打开子窗口的父窗口为: opener:

### 46.表示当前所属的位置: this

### 47.当在超链接中调用JS函数时用: (javascript : ) 来开头后面加函数名


### 48.JS的内建对象有:
```js
Array,Boolean,Date,Error,EvalError,Function,Math,Number,Object,RangeError,ReferenceError,RegExp,String,SyntaxError,TypeError,URIError
```

### 49.JS中的换行:/n

### 50.isNaN(变量):测试是否为数值型

### 51.JS中的all代表其下层的全部元素

### 52.JS中的焦点顺序:
```js
document.getElementByid(“表单元素”).tabIndex = 1
```

### 53.可设置元素是否可被修改,
```js
contentEditable
```
返回是否可修改的状态.
```js
isContentEditable
```

### 54.判断是否为禁止状态.
```js
isDisabled
```
设置禁止状态
```js
disabled
```

### 55.length取得长度,返回整型数值

### 56.addBehavior()是一种JS调用的外部函数文件其扩展名为.htc

### 57.window.focus()使当前的窗口在所有窗口之前.

### 58.blur()指失去焦点.与FOCUS()相反.

### 59.select()指元素为选中状态.

### 60.防止用户对文本框中输入文本:
```js
onfocus=”this.blur()”
```

### 61.取出该元素在页面中出现的数量:
```js
document.all.tags(“div”).length;
```

### 62.JS中分为两种窗体输出:模态和非模态.
```js
window.showModaldialog();
window.showModeless();
```

### 63.状态栏文字的设置:
```js
window.status=’alihanniba’,
```
**默认的状态栏文字设置:**
```js
window.defaultStatus = ‘alihanniba’;
```



















