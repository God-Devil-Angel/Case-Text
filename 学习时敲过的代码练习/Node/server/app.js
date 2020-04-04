const express = require('express');
const app = express();
const path = require('path');
//引入body-parmas模块
const bodyParser = require('body-parser');
app.use(bodyParser.json());
//express设置静态资源
app.use(express.static(path.join(__dirname, 'public')));

//设置跨域请求
app.all('*', function(req, res, next) {
    //设置请求头
    //允许所有来源访问
    res.header('Access-Control-Allow-Origin', '*')
        //用于判断request来自ajax还是传统请求
    res.header('Access-Control-Allow-Headers', 'X-Requested-With')
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    //允许访问的方式
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
        //修改程序信息与版本
    res.header('X-Powered-By', ' 3.2.1')
        //内容类型：如果是post请求必须指定这个属性
    res.header('Content-Type', 'application/json;charset=utf-8')
    next()
})


app.get('/first', (req, res) => {
    res.send({ "name": "ddd" });
})

app.get('/reponseText', (req, res) => {
    res.send({ "name": "赵子龙" });
})

app.get('/second', (req, res) => {
    res.status(400).send(req.query);
})
app.post('/second', (req, res) => {
    res.send(req.body);
    console.log(req.body);
})
app.post('/json', (req, res) => {
    res.send(req.body);
})
app.get('/gg', (req, res) => {
    res.send('hha0');
})
app.listen(80);
console.log('网站服务器运行中');