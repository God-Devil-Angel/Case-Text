const mongoose = require('mongoose');


//连接数据库
 mongoose.connect('mongodb://localhost/palyground',{useNewUrlParser: true, useUnifiedTopology: true})
 	.then(()=>console.log('数据库连接成功'))
 	.catch(err=>console.log(err));


//创建集合
 const user2 = new mongoose.Schema({
 	id: Number,
 	name: String,
 	age: Number
 })
 const User2 = mongoose.model('User2',user2);



 //添加数据

 // const user_2 = new User2({
 // 	id: 1001,
 // 	name: 'n1',
 // 	age: 22
 // })
 // user_2.save();

 // User2.create({id: 1002,name: 'n2',age: 23},(err,doc)=>{
 // 	if(err!=null){
 // 		console.log(err,'1002添加失败');
 // 		return;
 // 	}
 // 	console.log(doc,'添加成功');
 // })
 // User2.create({id: 1003,name: 'n3',age: 24}).then(result=>console.log(result,'添加成功')).catch(err=>console.log(err,'添加失败'));

//更新文档 updateOne() 或 updateMany()
// User2.updateOne({age: 22},{age: 25}).then(result=>console.log(result));
User2.updateMany({},{age: 30}).then(result=>console.log(result));