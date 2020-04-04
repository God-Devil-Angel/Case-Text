const fs = require('fs');
let cc ='吾乃常山赵子龙';
fs.writeFile('./demo.txt',cc,err=>{
	if(err!=null){
		console.log(err);
		return;
	}
	console.log('写入成功');
})