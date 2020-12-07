let sum: (x: number, y: number)=> number;

// interface Sum{
//     (x: number,y: number): number
// }

type Sum = (x:number, y: number) => number;
let abc: Sum =(a,b)=>{
    return a+b
}

//混合类型
interface Lib {
    ():void,
    version: number,
    doSomething(): void
}

let lib: Lib = (()=>{}) as Lib;// as Lib 类型断言
lib.version =1;
lib.doSomething = ()=>{}