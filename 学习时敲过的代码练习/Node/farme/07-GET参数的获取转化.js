
const express = require('express');
const app = express();

app.get('/',(req,res,next)=>{
	res.send(req.query);
})

app.listen(80);
console.log('启动');