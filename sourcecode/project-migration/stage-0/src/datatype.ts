//原始类型
let bool: boolean = false;
let str: string = 'zp';
let num: number = 1;
//数组
let arr:number[] = [1,2,3];
let arr1: Array<string | number> = ['1','1',1];

//元组
let touble:[string, number] = ['',1];

//函数
let add =(x: number, y:number):number=>{return x+y};
let compute: (x:number, y:number) => number;
compute = (a, b) =>a+b;

//对象
let obj:{x:number,y:number} ={x:1,y:2}
obj.x= 3


//undefined, null
let un: undefined = undefined;
let nu: null = null;

num = un;
num = nu;

//void
let noReturn =()=>{}

//any
let x;
x =1;
x= ''