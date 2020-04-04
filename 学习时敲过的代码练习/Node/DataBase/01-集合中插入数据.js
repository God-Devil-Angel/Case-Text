const mongoose = require('mongoose');

//连接数据库
mongoose.connect('mongodb://localhost/playground',{ useNewUrlParser: true, useUnifiedTopology: true })
		.then(()=>console.log('数据库连接成功'))
		.catch(err=>console.log(err,'数据库连接失败'));
//创建集合


	//1.创建集合规则 用mongoose.Schema构造方法
	const courseSchema = new mongoose.Schema({
		name: String,
		age: Number,
		grade: Number

	});
	//2.创建集合 用mongoose.model方法,第一个参数为名称，第二个参数为集合规则实例,返回一个构造函数
	 const Course = mongoose.model('Course',courseSchema);



//集合添加数据
	
	//1.创建集合实例
	// const course = new Course({
	// 	name: 'lwz',
	// 	age: 22,
	// 	grade: 88
	// })
	// //2.保存到数据库
	// course.save();
	// const course1 = new Course({
	// 	name: 'kk',
	// 	age: 23,
	// 	grade: 99
	// })
	// course1.save();

//第二种集合添加数据 利用集合的构造函数的create方法来添加,返回一个promise对象，可以利用then和catch方法
// Course.create({
// 	name: 'zx',
// 	age: 25,
// 	grade: 97
// },(err,doc)=>{
// 	if(err!=null){
// 		console.log(err);
// 		return;
// 	}
// 	console.log(doc);
	

Course.create({name:'ll',age: 30,grade: 93})
 .then(result=>console.log(result))
 .catch(err=>console.log(err));
