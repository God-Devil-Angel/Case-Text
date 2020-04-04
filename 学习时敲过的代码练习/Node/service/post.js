const http = require('http');
const app= http.createServer();
const queryString = require('querystring');

app.on('request',(req,res)=>{
	
	console.log(req.url);
	let postData ='';
	//post传输参数
	req.on('data',(chunk)=>{
		postData+=chunk
	});
	//参数传输完成后
	req.on('end',()=>{
		console.log(queryString.parse(postData));
	})

	res.end('ok');


})
app.listen(3000);
console.log('web服务器启动');