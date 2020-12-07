
// function add1(x: number, y: number){
//     return x+y
// }

// let add2:(x:number, y: number) => number;

// type add3 =(x:number, y: number)=>number;

// interface add4{
//     (x:number,y:number):number;
// }

// //剩余参数
// function add5(x:number, ...rest:number[]){
//     return x + rest.reduce((pre,cur)=>pre+cur);
// }
// console.log(add5(1,2,3,4,5,6));

// 函数重载
function add8(...rest:number[]):number;
function add8(...rest:string[]):string;
function add8(...rest:any[]):any{
    let first = rest[0];
    if(typeof first === 'string'){
        return rest.join('')
    }
    if(typeof first === 'number'){
        rest.reduce((pre,cur)=>pre+cur)
    }
}

console.log(add8('a','v','s'))
console.log(add8(1,2,3,43))