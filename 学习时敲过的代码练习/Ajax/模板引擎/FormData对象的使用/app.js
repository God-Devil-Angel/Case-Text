const express = require('express');
const app = express();
const formidable = require('formidable');
const path = require('path');

app.use(express.static('public'));
app.post('/formData', (req, res) => {
    //创建解析函数
    const form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
        res.send(fields);
    })
})
app.post('/files', (req, res) => {
    //创建解析函数对象
    const form = formidable.IncomingForm();
    //春初客户端传来文件的地址
    form.uploadDir = path.join(__dirname, 'public', '图片');
    //保留后缀名
    form.keepExtensions = true;
    form.parse(req, (err, fiels, files) => {
        res.send({
            path: files.attrName.path.split('public')[1]
        });
    })
})
app.listen(80);
console.log('服务器启动');