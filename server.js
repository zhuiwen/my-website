var express = require('express');
// 安装：npm install --save-dev http-proxy-middleware
// 创建代理中间件
var proxy = require('http-proxy-middleware').createProxyMiddleware;
var app = express();
const path = require('path')
// 暴露静态资源
//express.static(path), path是要暴露的静态资源目录
app.use(express.static(path.join(__dirname)))
// 配置代理
app.use('/mp', proxy({target: 'http://api-toutiao-web.itheima.net', changeOrigin: true}));
app.listen(3000, () => {
  console.log('http://localhost:3000');
});