
//引入router第三方模块
const getRouter = require('router');
const router = getRouter();
//引入path模块
const path = require('path');
//引入querystring模块
const querystring = require('querystring');
//导入学生集合
const student =require('./user');

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
	
//获取页面提交的数据
router.post('/index',(req,res)=>{
	console.log('post');
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
})