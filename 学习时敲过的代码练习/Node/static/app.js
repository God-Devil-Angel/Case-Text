const http = require('http');
const app = http.createServer();
const url = require('url');
const path = require('path');
const fs = require('fs');
const mime = require('mime');

app.on('request',(req,res)=>{
	let pathname = url.parse(req.url).pathname;
	pathname=pathname=='/'?'/default.html':pathname;
	let luj = path.join(__dirname,'public'+pathname);

	let type = mime.getType(luj);

	fs.readFile(luj,(err,result)=>{
		if(err!=null){
			res.writeHead(404,{
				'content-type': 'text/html;charset=utf8'
			})
			res.end('404,页面找不到了');
			return;
		} 

			res.end(result);
		
	})







})
app.listen(2060);
console.log('2060服务器为您服务中');