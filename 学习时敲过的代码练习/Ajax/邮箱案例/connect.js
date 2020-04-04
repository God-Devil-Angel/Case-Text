const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/email', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('数据库启动成功'))
    .catch(err => console.log(err, '服务器启动失败'));