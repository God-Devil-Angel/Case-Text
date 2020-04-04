const fs = require('fs');

async function p1(){
	
	throw 'dd';
	return 'p1';
}
p1().then((res)=>{
	console.log(res);
})
.catch((err)=>{
	console.log(err);
})