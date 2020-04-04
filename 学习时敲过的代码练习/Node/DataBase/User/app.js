const http = require('http');
const mongoose = require('mongoose');
const url = require('url');
const queryString = require('querystring');
//创建服务器
const app = http.createServer();
//创建数据库集合
const userSchema  = new mongoose.Schema({
	name: {
		type: String,
		require: true,
		minlength: 3,
		maxlength: 10
	},
	age:{
		type: Number,
		require: true,
		min: 1,
		max: 99
	},
	password: String,
	email: String,
	hobbies: [String]
})

const User = mongoose.model('User',userSchema);

//创建服务器请求监听
app.on('request',(req,res)=>{
	let postData = '';
	req.on('data',(chunk)=>{
		postData+=chunk;
	});
	req.on('end',()=>{
		console.log(queryString.parse(postData));
	});
	
	res.end('ok');
})

app.listen(2020);
console.log('2020服务器正在运行...');