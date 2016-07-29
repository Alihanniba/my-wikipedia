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
    'gallery': 'https://a.alipayobjects.com/gallery',
    'app': 'path/to/app',
  }
});
```

```js
define(function(require, exports, module) {

   var underscore = require('gallery/underscore');
     //=> 加载的是 https://a.alipayobjects.com/gallery/underscore.js

   var biz = require('app/biz');
     //=> 加载的是 path/to/app/biz.js

});
```