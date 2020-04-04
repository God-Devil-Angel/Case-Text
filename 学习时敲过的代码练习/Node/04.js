const fs = require('fs');
fs.readFile('./02.js','utf8',(err,doc)=>{
	console.log(err);
	console.log(doc);
})