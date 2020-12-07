interface Length {
    length: number
}
function log<T extends Length>(value: T):T{
    console.log(value, value.length);
    return value;
}

log(['1','2']);
log<string[]>(['1','2'])
// log(false)
type Log = <T>(value:T) => T;
// let myLog: Log = log;


interface Special{
    name: string,
}
class Human<Special>{
    

}


