const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
mongoose.connect('mongodb://itcast:itcast@localhost:27017/todo', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log('成功'));



app.listen(2000);
console.log('2000启动');