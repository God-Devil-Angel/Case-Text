const template = require('art-template');
const path = require('path');

const pathname = path.join(__dirname,'views','a1.art');


const index =template(pathname,{
	User:[{
	name: 'll',
	age: 8,
	conent: '<h1>jiji<h1>'
},{
	name: 'll1',
	age: 10,
	conent: '<h1>jiji<h1>'
},{
	name: 'll2',
	age: 18,
	conent: '<h1>jiji<h1>'
}]
});
console.log(index);