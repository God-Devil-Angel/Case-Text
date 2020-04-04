const express = require('express');
const app = express();



app.use((req,res,next)=>{
	console.log('use控件');
	next();
})
app.use('/list',(req,res,next)=>{
	console.log('list下use');
	next();
})
app.get('/',(req,res)=>{
	res.send('欢迎您');
})
app.get('/list',(req,res)=>{
	res.send({name:'long',age: 35});
})

app.listen(1000);
console.log('1000服务器已启动')