const template = require('art-template');
const path = require('path');

const pathname = path.join(__dirname,'index.art');

const index = template(pathname,{
	msg:'这是首页'
})

console.log(index);