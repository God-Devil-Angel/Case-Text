const mongoose = require('mongoose');


//连接数据库
	 mongoose.connect('mongodb://localhost/playground',{useUnifiedTopology: true, useNewUrlParser: true})
	 .then(()=>console.log('数据库连接成功'))
	 .catch(err=>console.log('数据库连接失败',err));


//创建集合
 const user3 = new mongoose.Schema({
 	id: {
 		type: Number,
 		min: 1000,
 		max: 1111

 	},
 	name: {
 		 type: String,
 		 minlength: 3,
 		 maxlength: 6,
 		 message: '名字长度不符合'
 		
 	},
 	sex: {
 		type: String,
 		enum: ['男','女']
 		
 	}

 })

 const User3 = mongoose.model('User3',user3);;


 User3.create({id: 1000,name: 'lw',sex: '男'})
 	.then(()=>console.log('添加数据成功'))
 	.catch(err=>{
 		let erro = err.errors;
 		for(var att in erro){
 			console.log(erro[att]['message']);
 		}
 	})