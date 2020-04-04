const http = require('http');
//创建服务器
const app = http.createServer();
//导入数据库
require('./modul/connect');
//导入学生集合
const student =require('./user');
//引入router第三方模块
const getRouter = require('router');
const router = getRouter();
//引入path模块
const path = require('path');

//引入静态资源访问服务模块 serve-static
const serve = require('serve-static');
const ser = serve(path.join(__dirname,'Public'));


//引入querystring模块
const querystring = require('querystring');


//引入dateformat第三方模块
const dateformat = require('dateformat');

//引入模板引擎
const template = require('art-template');
template.defaults.root = path.join(__dirname,'views');
template.defaults.imports.format = dateformat;



router.get('/index',(req,res)=>{
	let index =template('index.art',{});
	res.end(index);
})
router.get('/list',async (req,res)=>{
	
	let sutdata = await student.find();
	let list =template('list.art',{
		Student: sutdata
	})
	
	res.end(list);
})

//获取页面提交的数据
router.post('/list',(req,res)=>{
	let postData = '';
	req.on('data',(chunk)=>{
		postData+=chunk;
	})
	req.on('end',async ()=>{
		student.create(querystring.parse(postData)).then(()=>console.log('接受成功')).catch((err)=>console.log('接受失败，请检查代码',err));
		let sutdata = await student.find();
	let list =template('list.art',{
		Student: sutdata
	})
	
	res.end(list);
	})
})

//客户端请求事件
app.on('request',(req,res)=>{
	//启用路由
	router(req,res,()=>{})
	//启用静态服务模块
	ser(req,res,()=>{});
})
app.listen(2000);
console.log('2000服务器为您服务中');