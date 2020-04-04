const express = require('express');
const admin = express();


admin.get('/',(req,res,next)=>{
	res.send('admin的主页');
})


module.exports = admin;