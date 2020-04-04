const mongoose = require('mongoose');

//连接数据库
 mongoose.connect('mongodb://localhost/playground',{ useUnifiedTopology: true,useNewUrlParser: true})
 	.then(()=>console.log('数据库连接成功'))
 	.catch(err=>consoel.log(err,'数据库连接失败'));


//创建作者集合
 const person = new mongoose.Schema({
 	name: String,
 	age: Number
 });
 const Person = mongoose.model('Person',person);

 //创建文章集合
 	const artil = mongoose.Schema({
 		title: {
 			type:String,
 			maxlength: 50
 		},
 		author: {
 			type:mongoose.Schema.Types.ObjectId,ref:'Person'
 		}
 	})
 	const Artil = mongoose.model('Artil',artil);

 	//作者添加数据
 	// Person.create({name: 'baba',age: 25}).then(()=>console.log('添加成功'));
	// Person.find().select('_id').then(result=>console.log(result));

	//文章添加数据
	 // Artil.create({title:'大话西游',author:'5e3bd7bc44ad4a35d82473ff'}).then(result=>console.log(result));

	 //集合联合查询,查询文章
	Artil.find().populate('author').then(result=>console.log(result)).catch(err=>console.log(err));