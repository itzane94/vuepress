(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{240:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("h3",{attrs:{id:"什么是sql注入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是sql注入","aria-hidden":"true"}},[s._v("#")]),s._v(" 什么是SQL注入")]),s._v(" "),a("p",[s._v("SQL注入是一种将SQL代码添加到输入参数中，传递到SQL服务器解析并执行的一种攻击方式。")]),s._v(" "),a("h3",{attrs:{id:"sql注入的产生"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql注入的产生","aria-hidden":"true"}},[s._v("#")]),s._v(" SQL注入的产生")]),s._v(" "),a("p",[s._v("web开发人员无法保证所有的输入都已经过滤 攻击者利用发送给SQL服务器的输入数据结构可执行是SQL代码 数据库未做相应的安全配置")]),s._v(" "),a("h3",{attrs:{id:"如何寻找sql注入漏洞？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何寻找sql注入漏洞？","aria-hidden":"true"}},[s._v("#")]),s._v(" 如何寻找SQL注入漏洞？")]),s._v(" "),a("p",[s._v("借助逻辑推理\n识别web应用中所有输入点\nget输入 post输入 用户个人信息 了解哪些请求可以触发异常(特殊字符，单引号双引号等） 检测服务器中响应的异常 （处理，报500错误或实行跳转")]),s._v(" "),a("h3",{attrs:{id:"如何进行sql注入攻击？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何进行sql注入攻击？","aria-hidden":"true"}},[s._v("#")]),s._v(" 如何进行SQL注入攻击？")]),s._v(" "),a("ol",[a("li",[s._v("数字注入\nSQL语句中包含数字的部分 如get请求通过id获取文章 url?id=1 注入：url?id=-1 or 1=1")])]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token string"}},[s._v('"select * from article where id = "')]),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$id"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("字符串注入\nSQL语句中包含字符串的部分 例如用户登录")])]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token string"}},[s._v('"select * from user where name = $name and password = $password"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("注入： mysql注释的方式 # 填写 用户名 zx'# 密码 suiyixie")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("user")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("where")]),s._v(" name "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'zx'")]),a("span",{attrs:{class:"token comment"}},[s._v("#' and password = 'xuiyixie'")]),s._v("\n")])])]),a("p",[s._v("mysql注释的方式-- 填写 用户名 zx'-- 密码 suiyixie")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("user")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("where")]),s._v(" name "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'zx'")]),a("span",{attrs:{class:"token comment"}},[s._v("--' and password = 'xuiyixie'")]),s._v("\n")])])]),a("h3",{attrs:{id:"如何预防sql注入？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何预防sql注入？","aria-hidden":"true"}},[s._v("#")]),s._v(" 如何预防SQL注入？")]),s._v(" "),a("ol",[a("li",[s._v("严格减产输入变量的类型和格式 如get请求通过id获取文章 url?id=1 注入：url?id=-1 or 1=1 后台判断类型 is_numeric()，或者强制类型转换 正则表达式验证、强制限制字符长度等")]),s._v(" "),a("li",[s._v("过滤或者转义特殊字符 addslashes($str) mysqli_real_escape_string($db,$str);")]),s._v(" "),a("li",[s._v("利用mysql的预编译")])]),s._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[s._v("mysqli方式\n"),a("span",{attrs:{class:"token variable"}},[s._v("$sql")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"select id ,username from user where username = ? and password = ?"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token variable"}},[s._v("$stmt")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("mysqli_prepare")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token variable"}},[s._v("$db")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token variable"}},[s._v("$sql")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("mysqli_stmt_bind_param")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token variable"}},[s._v("$stmt")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'ss'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token variable"}},[s._v("$username")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token variable"}},[s._v("$password")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("//ss表示两个参数的类型")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("mysqli_stmt_execute")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token variable"}},[s._v("$stmt")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("mysqli_stmt_bind_result")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token variable"}},[s._v("$stmt")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token variable"}},[s._v("$id")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token variable"}},[s._v("$username")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("//绑定结果集")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("mysqli_stmt_fetch")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token variable"}},[s._v("$stmt")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token variable"}},[s._v("$id")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token variable"}},[s._v("$username")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" 打印结果\npdo方式\n"),a("span",{attrs:{class:"token comment"}},[s._v("//连接")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("try")]),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),a("span",{attrs:{class:"token variable"}},[s._v("$pdo")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{attrs:{class:"token class-name"}},[s._v("PDO")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"mysql:host=localhost;dbname=zx"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"root"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token double-quoted-string string"}},[s._v('""')]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{attrs:{class:"token keyword"}},[s._v("catch")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("PDOException "),a("span",{attrs:{class:"token variable"}},[s._v("$e")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("die")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"数据库连接失败"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token variable"}},[s._v("$e")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),a("span",{attrs:{class:"token function"}},[s._v("getMessage")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v("//预处理")]),s._v("\n"),a("span",{attrs:{class:"token variable"}},[s._v("$sql")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"select id ,username from user where username = ? and password = ?"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token variable"}},[s._v("$stmt")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token variable"}},[s._v("$pdo")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),a("span",{attrs:{class:"token function"}},[s._v("prepare")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token variable"}},[s._v("$sql")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v("//绑定")]),s._v("\n"),a("span",{attrs:{class:"token variable"}},[s._v("$stmt")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),a("span",{attrs:{class:"token function"}},[s._v("bindParam")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token number"}},[s._v("1")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token variable"}},[s._v("$username")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token variable"}},[s._v("$stmt")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),a("span",{attrs:{class:"token function"}},[s._v("bindParam")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token number"}},[s._v("2")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token variable"}},[s._v("$password")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v("//执行并返回结果")]),s._v("\n"),a("span",{attrs:{class:"token variable"}},[s._v("$stmt")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),a("span",{attrs:{class:"token function"}},[s._v("execute")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token variable"}},[s._v("$row")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token variable"}},[s._v("$stm")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),a("span",{attrs:{class:"token function"}},[s._v("fetchAll")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token constant"}},[s._v("PDO")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{attrs:{class:"token constant"}},[s._v("FETCH_ASSOC")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("div",{staticClass:"danger custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),a("p",[s._v("本文作者：zane"),a("br"),s._v("\n版权声明：本博客所有文章除特别声明外，均采用 CC BY-NC-SA 3.0 许可协议。转载请注明出处！")])])])}],!1,null,null,null);e.options.__file="SQL注入.md";t.default=e.exports}}]);