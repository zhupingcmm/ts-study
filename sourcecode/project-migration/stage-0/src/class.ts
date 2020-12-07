class Dog{
    constructor(name: string){
        this.name = name;
    }
    name:string;
    private pri(){}; // privete 关键字修饰的变量或者方法不能被实例或者子类使用
    protected pro(){} // protected 关键字修饰的变量或者方法只能被子类使用，不能被实例使用
    static food: string = 'hhh'
    run(){}
}

Dog.food;

class Huskey extends Dog{
    constructor(name:string, age: number){
        super(name);
        this.age = age;
        // this.pri();
        this.pro();
    }
    age: number;
}

let dog = new Dog('zp');
// dog.pri()
// dog.pro();
