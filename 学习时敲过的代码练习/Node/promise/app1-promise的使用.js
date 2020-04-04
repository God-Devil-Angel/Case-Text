const fs = require('fs');

//promise是一个构造函数 使用必须用new关键字，参数是一个回调函数，回调函数里面有两个方法参数，resolve返回执行结果，reject返回错误信息
function p1(){
	return new Promise((resolve,reject)=>{

		fs.readFile('./1.txt','utf8',(err,result)=>{
			if(err!=null){
				reject(err);
				return;
			}
			resolve(result);
		})

	})
}
function p2(){
	return new Promise((resolve,reject)=>{

		fs.readFile('./2.txt','utf8',(err,result)=>{
			if(err!=null){
				reject(err);
				return;
			}
			resolve(result);
		})

	})
}
function p3(){
	return new Promise((resolve,reject)=>{

		fs.readFile('./3.txt','utf8',(err,result)=>{
			if(err!=null){
				reject(err);
				return;
			}
			resolve(result);
		})

	})
}


p1().then((one)=>{
	console.log(one);
	return p2();
})
.then((two)=>{
	console.log(two);
	return p3();
})
.then((three)=>{
	console.log(three);
})