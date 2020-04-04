let a = 11;
let b = 12;
let c = 13;

function hello() {
    console.log('hello')
}

//默认导出
export default {
    a,
    b,
    hello
}
//按需导出
export let cc = 123;