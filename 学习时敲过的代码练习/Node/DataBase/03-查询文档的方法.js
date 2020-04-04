const mongoose = require('mongoose');


//连接数据库
	mongoose.connect('mongodb://localhost/playground',{useNewUrlParser: true, useUnifiedTopology: true})
		.then(()=>console.log('数据库连接成功'))
		.catch(err=>console.log(err));


//创建集合
	const userCollect = new mongoose.Schema({
		id: Number,
		name: String,
		age: Number,
		hobbies: new Array,
		sal: Number
	})
	const UserCollect = mongoose.model('UserCollect',userCollect);

// // 添加数据
// 	UserCollect.create({id:1001,name:'joke',age: 23,hobbies:['螳螂拳','泰拳','王八拳']}).then((err,doc)=>{
// 		if(err!=null){
// 			console.log(err,'插入未成功');
// 			return;
// 		}
// 		console.log('1001插入成功');
// 	})
// 	const user = new UserCollect({
// 		id:1002,name:'jojo',age: 25,hobbies:['王九拳','泰拳','王Ⅹ拳']
// 	})
// 	user.save();
// 	UserCollect.create({id:1001,
// 		name:'joje',
// 		age: 23,
// 		hobbies:['十一拳','泰拳','十二拳']
// 	},(err,doc)=>{
// 		if(err!=null){
// 			console.log(err,'插入未成功');
// 			return;
// 		}
// 		console.log('1003插入成功');
// 	})

	//查询方法
	 //1.大于$gt小于$lt
	 	// UserCollect.find({age:{$gt:20,$lt:24}}).then(result=>console.log(result));
	 //2.hobbies包含数据的 必须是个数组
	 	// UserCollect.find({hobbies:{$in:['泰拳']}}).then(result=>console.log(result));
	 //3.选择要查询的字段 select()
	 // UserCollect.find().select('name age -_id').then(result=>console.log(result));
	 //4.skip跳过多少条数据，limit限制多少条
	 UserCollect.find().skip(1).limit(1).then(result=>console.log(result));
