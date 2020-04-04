const express = require('express');
const app = express();

//构建模块化路由对象
const home = express.Router();

//请求地址和模块化路由进行匹配
app.use('/home',home);

//home下创建路由
home.get('/index',(req,res,next)=>{
	res.send('index的页面');
})

app.listen(80);