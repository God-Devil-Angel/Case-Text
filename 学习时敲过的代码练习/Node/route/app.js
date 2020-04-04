const http = require('http');
const app = http.createServer();
const url = require('url');
const queryString = require('querystring')
app.on('request',(req,res)=>{
	const method = req.method.toLowerCase();
	res.writeHead(200,{
		'content-type':'text/html;charset=utf8'
	});
	if(method=='get'){
		let p= url.parse(req.url,true).query;
		let pathname = p.pathname;
		console.log(p);
		if(pathname=='/' || pathname=='/index'){
			res.end('欢迎来到主页');

		}else if(pathname=='/list'){
			res.end('欢迎来到列表页');

		}else{
			res.end('资源丢失');
		}
		

	}else if(method=='post'){
		res.writeHead(200,{
			'content-type': 'text/plain;charset=utf8'
		})
		let postData='';
		req.on('data',(chunk)=>{
			postData+=chunk;
		})
		req.on('end',()=>{
			console.log(queryString.parse(postData));
		})
		res.end('ok');

	}







})
app.listen(2080);
console.log('服务器启动成功');