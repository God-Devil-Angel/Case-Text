const express = require('express');
const app = express();
const fs = require('fs');

app.get('/',(req,res,next)=>{
	// throw new Error('出现了未知错误');
	// res.send('已登录');
	fs.readFile('./demo.txt',(err,doc)=>{
		if(err!=null){
			next(err);
		}
	})
})

app.use((err,req,res,next)=>{
	res.status(500).send(err.message);
})


app.listen(2020);
console.log('2020服务器启动成功');