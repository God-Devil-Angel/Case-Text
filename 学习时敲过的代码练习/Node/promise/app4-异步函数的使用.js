const fs= require('fs');

//异步函数 返回的是promise对象
//await 后面必须跟promise对象，暂停异步函数 直到当前函数返回执行结果
async function p1(){
	return 'p1';
}
async function p2(){
	return 'p2';
}
async function p3(){
	return 'p3';
}
async function run(){
	console.log(await p1());
	console.log(await p2());
	console.log(await p3());
}
run();