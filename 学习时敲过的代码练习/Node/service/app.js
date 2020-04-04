

//引入系统某块http;
const http = require('http');
//创建web服务器，付给app服务器对象
const app = http.createServer();
const url = require('url');
//客户端请求时
app.on('request',(req,res)=>{
	res.writeHead(200,{
		'content-type':'text/html;charset=utf8'
	})
	let {query,pathname}=url.parse(req.url,true);
	console.log(req.method);
	if(pathname=='/index' || pathname=='/'){
		res.end('index主页');
	}else if(pathname=='/list'){
		res.end('list页面');
	}else {
		res.end('not found');
	}
	// console.log(req.headers['accept']);
	
	
	console.log(query.name);
	console.log(query.age);
	if(req.method=='GET'){
		res.end('<h1>get</h1>')
	}else {
		res.end('<h1>post</h1>')
	}
	//res.end('<h1>user name:LWZhahahahhah</h1>');

})
//监听接口
app.listen(3000);
console.log('web服务器已启动');