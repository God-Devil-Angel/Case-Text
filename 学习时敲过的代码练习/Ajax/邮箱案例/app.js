const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
require('./connect');
const U = require('./User');

app.use(express.static(path.join(__dirname, 'public')));

app.post('/email', (req, res) => {
    U.User.findOne(req.body).then((result) => {
        if (result) {
            res.send('对不起，邮箱已被占用，请重新输入');
        } else {
            res.status(404).send('恭喜你,邮箱可以使用');
        }

    })
})
app.get('/search', (req, res) => {

    U.User1.find().select('message').then((result) => {
        var aray = [];
        for (var i = 0; i < result.length; i++) {
            var arr = result[i].message;

            for (var j = 0; j < arr.length; j++) {
                if (arr[j].includes(req.query.message)) {

                    aray[aray.length] = arr[j];
                }
            }
        }

        res.send(aray);
    })
})

app.listen(2020);
console.log('2020服务器已启动')