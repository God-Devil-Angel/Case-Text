const express = require('express');
const app = express();

app.get('/',(req,res)=>{
	send('欢迎您')
})


app.listen(1000);
console.log('1000服务器已启动')