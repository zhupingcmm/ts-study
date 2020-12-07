var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.pri = function () { };
    ; // privete 关键字修饰的变量或者方法不能被实例或者子类使用
    Dog.prototype.pro = function () { }; // protected 关键字修饰的变量或者方法只能被子类使用，不能被实例使用
    Dog.prototype.run = function () { };
    Dog.food = 'hhh';
    return Dog;
}());
Dog.food;
var Huskey = /** @class */ (function (_super) {
    __extends(Huskey, _super);
    function Huskey(name, age) {
        var _this = _super.call(this, name) || this;
        _this.age = age;
        // this.pri();
        _this.pro();
        return _this;
    }
    return Huskey;
}(Dog));
var dog = new Dog('zp');
// dog.pri()
// dog.pro();
