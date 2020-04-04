const express = require('express');
const app = express();
const path = require('path');
//渲染后缀名为art时，使用express-art-template
app.engine('art', require('express-art-template'));
//设置模板的路径
app.set('views', path.join(__dirname, 'views'));
//渲染时不写后缀名，默认为art后缀
app.set('view engine', 'art');
app.get('/index', (req, res) => {
    res.render('index', {
        msg: 'dfs'
    });
})

app.listen(80);
console.log('80端口')