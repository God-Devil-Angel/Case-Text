
const http = require('http');
let app = http.createServer();
const mime = require('mime');

app.on('request',(req,res)=>{
	let re= req.method.toLowerCase();
	res.writeHead(200,{
		'content-type':'text/html;charset=utf8'
	})
	if(re=='get'){
		res.end('<h1><h1>');
	}else {
		res.end('post you monther');
	}





})

// let promise = new Promise((resolve,reject)=>{

// 		// resolve('德玛西亚');
// 		reject('我的剑就是你的剑');



// })


// promise.then((result)=>{
// 	console.log(result);
// })
// .catch((err)=>{
// 	console.log(err);
// })
app.listen(2020);
console.log('2020服务器欢迎您地方使用，状态：已开启');