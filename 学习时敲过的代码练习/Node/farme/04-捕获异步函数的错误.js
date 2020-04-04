const express = require('express');
const app = express();
const fs = require('fs');
//将api转换成primse对象
const promisify = require('util').promisify;
const readFile = promisify(fs.readFile);
app.get('/', async (req,res,next)=>{
	try{
		let es = await readFile('./des.txt','utf8');
		res.send(es);
	}catch(ex){
		next(ex);

	}
})
app.use((err,req,res,next)=>{
	res.status(500).send(err.message);
})
app.listen(2020);
console.log('服务器启动了');