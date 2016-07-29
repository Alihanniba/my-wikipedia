###模块标识
模块标识是一个字符串，用来标识模块。在 require、 require.async 等加载函数中，第一个参数都是模块标识。

Sea.js 中的模块标识是 CommonJS 模块标识 的超集:
1. 一个模块标识由斜线（/）分隔的多项组成。
2. 每一项必须是小驼峰字符串、 . 或 .. 。
3. 模块标识可以不包含文件后缀名，比如 .js 。
4. 模块标识可以是 相对 或 顶级 标识。如果第一项是 . 或 ..，则该模块标识是相对标识。
5. 顶级标识根据模块系统的基础路径来解析。
6. 相对标识相对 require 所在模块的路径来解析。

注意，符合上述规范的标识肯定是 Sea.js 的模块标识，但 Sea.js 能识别的模块标识不需要完全符合以上规范。 比如，除了大小写字母组成的小驼峰字符串，Sea.js 的模块标识字符串还可以包含下划线（_）和连字符（-）， 甚至可以是 http://、https://、file:/// 等协议开头的绝对路径。


####相对标识
相对标识以 . 开头，只出现在模块环境中（define 的 factory 方法里面）。相对标识永远相对当前模块的 URI 来解析：

 ```js
 // 在 http://example.com/js/a.js 的 factory 中：
require.resolve('./b');
  // => http://example.com/js/b.js

// 在 http://example.com/js/a.js 的 factory 中：
require.resolve('../c');
  // => http://example.com/c.js
 ```

