//引入mongoose第三方包
const mongoose = require('mongoose');

//连接数据库
	mongoose.connect('mongodb://localhost/playground',{useNewUrlParser: true,useUnifiedTopology: true})
	.then(()=>console.log('数据库连接成功'))
	.catch(err=>console.log(err,'数据库连接失败'));


	//建立集合 
		//1.创建集合规则实例 mongoose.Schema构造函数
		const userSchema = new mongoose.Schema({
			id: Number,
			name: String,
			sal: Number
		})
		//2.创建集合的构造函数
		const UserSchema = mongoose.model('UserSchema',userSchema);


	//插入数据
		const user = new UserSchema({
			id: 1001,
			name: 'zhangsan',
			sal: 3350
		})
		user.save();

		UserSchema.create({id: 1002, name: 'lisi',sal: 5000},(err,doc)=>{
			if(err!=null){
				console.log(err,'02s数据插入错误');
				return
			}
			console.log('02数据插入完毕')
		})
		UserSchema.create({id: 1003, name: 'wangwu', sal: 6500})
		.then(()=>console.log('03数据插入完毕'))
		.catch(err=>console.log(err,'03数据插入错误'));



		//查询数据 用集合的构造函数方法 UserSchema.find()<返回数组> 或 UserSchema.findOne()<返回一个对象> 都是返回一个promise对象 用then返回结果 
		UserSchema.find({name: 'lisi'}).then(result=>console.log(result));
		UserSchema.findOne({name: 'wangwu'}).then(result=>console.log(result));
