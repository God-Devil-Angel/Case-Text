
const express = require('express');
const app = express();

//引入第三方模块 body-parser
const bodyParser = require('body-parser');

//拦截所有请求 true:第三方模块qus false:系统模块queryString.parse()
app.use(bodyParser.urlencoded({extended:false}));

app.post('/app',(req,res,next)=>{

	res.send(req.body);
})



app.listen(80);
