/* 
    undefined null
    只有一个值，指为类型本身
    undefined 类型的值为 undefined
    null 类型的值为 null
    
    undefined：表示声明但未赋值的变量值（找不到值）
    null：表示声明了变量并已赋值，值为null（能找到，值就是null）

*/
// 类型注解为: undefined
let u: undefined = undefined;

// 类型注解为: null
let n: null = null;

console.log(u, n);

let u1: undefined;
console.log(u1);

let n1: null = null;
console.log(n1);


