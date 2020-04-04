const express = require('express');
const home = express.Router();


home.get('/',(req,res,next)=>{
	res.send('home主页');
})


module.exports = home;