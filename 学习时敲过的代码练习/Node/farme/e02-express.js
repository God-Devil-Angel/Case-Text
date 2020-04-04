const express = require('express');

//调用exprss方法简历服务器
const app = express();

app.use('/admin',(req,res,next)=>{
	let flag=false;
	if(flag==false){
		res.send('用户还未登录，请先登录');

	}else{
		next();
	}
})
app.get('/admin',(req,res,next)=>{
	res.send('用户已登录');
})

app.use((req,res,next)=>{
	res.status(404).send('用户子资源已丢失');
})
app.listen(2020);
console.log('2020服务器运行中');