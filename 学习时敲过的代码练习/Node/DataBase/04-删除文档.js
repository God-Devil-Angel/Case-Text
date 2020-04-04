const mongoose = require( 'mongoose');


 // 连接数据库
  mongoose.connect('mongodb://localhost/playground',{useNewUrlParser: true, useUnifiedTopology: true})
  .then(()=>console.log('数据库连接成功'))
  .catch(err=>console.log(err));

  //创建集合实力
  	const user = new mongoose.Schema({
  		id: Number,
  		name: String,
  		age: Number,
  		sal: Number

  	}) 
  	const User = mongoose.model('User',user);

  // 	//添加数据
  // 	const user1 = new User({
  // 		id: 1000,
  // 		name: 'm1',
  // 		age: 22,
  // 		sal: 3000
  // 	})
  // 	user1.save();
  // 	User.create({id:1001,name:'m2',age: 23,sal: 3500},(err,doc)=>{
  // 		if(err!=null){
  // 			console.log(err,'1001数据添加失败')
  // 			return;
  // 		}
  // 		console.log('1001数据添加成功');
  // 	})
  // 	User.create({id: 1002, name: 'm3', age: 24, sal: 4500})
  // 		.then(()=>console.log('1002数据添加成功'))
  // 		.catch(()=>console.log('1002数据添加失败'));

 //删除文档
  // User.findOneAndDelete({name: 'm2'}).then((result)=>console.log(result));
  User.deleteMany({}).then((result)=>console.log(result));