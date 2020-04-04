const fs= require('fs');



let promise = new Promise((resolve,reject)=>{

	fs.readFile('./*.txt','utf8',(err,result)=>{
		if(err!=null){
			reject(err);
			return;
		}
		resolve(result);
	})

})

promise.then((result)=>{
	console.log(result);
})
.catch((err)=>{
	console.log(err);
})