const mongoose = require('mongoose');

//创建学生集合
 const student = mongoose.Schema({
 	name: {
 		type: String,
 		require: true,
 		
 		maxlength: 10
 	},
 	age: {
 		type: Number,
 	
 		max: 99
 	},
 	sex: {
 		type:String,
 		
 	},
 	email: String,
 	hobbies:[String],
 	collage:String,
 	enterDate: {
 		type: Date,
 		default: Date.now

 	}
 })

 const Student = mongoose.model('Student',student);
 module.exports=Student;