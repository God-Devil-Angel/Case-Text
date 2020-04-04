const express = require('express');
const app = express();

const home= require('./模块化路由的配件/home');
const admin = require('./模块化路由的配件/admin');

app.use('/home',home);
app.use('/admin',admin);


app.listen(80);
console.log('服务器启动');


