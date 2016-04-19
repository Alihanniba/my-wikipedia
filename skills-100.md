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
























