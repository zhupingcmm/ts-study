// function add1(x: number, y: number){
//     return x+y
// }
function add8() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    var first = rest[0];
    if (typeof first === 'string') {
        return rest.join('');
    }
    if (typeof first === 'number') {
        rest.reduce(function (pre, cur) { return pre + cur; });
    }
}
console.log(add8('a', 'v', 's'));
console.log(add8(1, 2, 3, 43));
