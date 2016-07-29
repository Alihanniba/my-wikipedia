###Seajs配置

可以对 Sea.js 进行配置，让模块编写、开发调试更方便。

####seajs.config seajs.config(options)

用来进行配置的方法。

```js
seajs.config({

  // 别名配置
  alias: {
    'es5-safe': 'alihanniba/es5-safe/0.9.3/es5-safe',
    'json': 'alihanniba/json/1.0.2/json',
    'jquery': 'jquery/jquery/1.10.1/jquery'
  },

  // 路径配置
  paths: {
    'gallery': 'https://www.alihanniba.com/alihanniba'
  },

  // 变量配置
  vars: {
    'locale': 'zh-cn'
  },

  // 映射配置
  map: [
    ['http://alihanniba.com/js/app/', 'http://localhost/js/app/']
  ],

  // 预加载项
  preload: [
    Function.prototype.bind ? '' : 'es5-safe',
    this.JSON ? '' : 'json'
  ],

  // 调试模式
  debug: true,

  // Sea.js 的基础路径
  base: 'http://alihanniba.com/path/to/base/',

  // 文件编码
  charset: 'utf-8'
});
```

支持以下配置选项：

####alias Object
当模块标识很长时，可以使用 alias 来简化。

```js
seajs.config({
  alias: {
    'jquery': 'jquery/jquery/1.10.1/jquery',
    'app/biz': 'http://path/to/app/biz.js',
  }
});
```

```js
define(function(require, exports, module) {

   var $ = require('jquery');
     //=> 加载的是 http://path/to/base/jquery/jquery/1.10.1/jquery.js

   var biz = require('app/biz');
     //=> 加载的是 http://path/to/app/biz.js

});
```

使用 alias，可以让文件的真实路径与调用标识分开，有利于统一维护。

####paths Object

当目录比较深，或需要跨目录调用模块时，可以使用 paths 来简化书写。

```js
seajs.config({
  paths: {
    'gallery': 'https://a.alihanniba.com/gallery',
    'app': 'path/to/app',
  }
});
```

```js
define(function(require, exports, module) {

   var underscore = require('alihanniba/underscore');
     //=> 加载的是 https://a.alihanniba.com/alihanniba/underscore.js

   var biz = require('app/biz');
     //=> 加载的是 path/to/app/biz.js

});
```

paths 配置可以结合 alias 配置一起使用，让模块引用非常方便。

####vars Object

有些场景下，模块路径在运行时才能确定，这时可以使用 vars 变量来配置。

```js
seajs.config({
  vars: {
    'locale': 'zh-cn'
  }
});
```

```js
define(function(require, exports, module) {

  var lang = require('./alihanniba/{locale}.js');
     //=> 加载的是 path/to/alihanniba/zh-cn.js

});
```

vars 配置的是模块标识中的变量值，在模块标识中用 {key} 来表示变量。

####map Array
该配置可对模块路径进行映射修改，可用于路径转换、在线调试等。

```js
seajs.config({
  map: [
    [ '.js', '-debug.js' ]
  ]
});
```

```js
define(function(require, exports, module) {

  var a = require('./a');
     //=> 加载的是 path/to/a-debug.js

});
```

####preload Array

使用 preload 配置项，可以在普通模块加载前，提前加载并初始化好指定模块。

```js
// 在老浏览器中，提前加载好 ES5 和 json 模块
seajs.config({
  preload: [
    Function.prototype.bind ? '' : 'es5-safe',
    this.JSON ? '' : 'json'
  ]
});
```

preload 中的空字符串会被忽略掉。


**注意：**preload 中的配置，需要等到 use 时才加载。比如：

```js
seajs.config({
  preload: 'a'
});

// 在加载 b 之前，会确保模块 a 已经加载并执行好
seajs.use('./b');
```
preload 配置不能放在模块文件里面：

```js
seajs.config({
  preload: 'a'
});

define(function(require, exports) {
  // 此处执行时，不能保证模块 a 已经加载并执行好
});
```
####debug Boolean

值为 true 时，加载器不会删除动态插入的 script 标签。插件也可以根据 debug 配置，来决策 log 等信息的输出。

####base String

Sea.js 在解析顶级标识时，会相对 base 路径来解析。

在 seajs@2.3.0 之前，Sea.js 会根据 sea.js 的路径去猜测 base 路径，一般为路径上含有 seajs 字符串的上一级路径。在 seajs@2.3.0 后，去掉了这个模糊的猜测。我们推荐始终手动设置一个准确的 base 路径。

####charset String | Function

获取模块文件时，**<script> </script>**或 <link> 标签的 charset 属性。 默认是 utf-8;charset 还可以是一个函数:

```js
seajs.config({
  charset: function(url) {

    // xxx 目录下的文件用 gbk 编码加载
    if (url.indexOf('http://alihanniba.com/js/xxx') === 0) {
      return 'gbk';
    }

    // 其他文件用 utf-8 编码
    return 'utf-8';

  }
});
```














