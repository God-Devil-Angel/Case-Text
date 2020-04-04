const template = require('art-template');

const dataformat = require('dataformat');
const path = require('path');

template.defaults.root= __dirname;
 template.defaults.imports.format = dataformat;
 template.defaults.extname='.art';

const index = template('a',{
	time:new Date()
})

console.log(index);