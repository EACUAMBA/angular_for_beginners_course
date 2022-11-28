
//Normal function with optional parameter
function add(a:number, b: number, c?: number) : number{
    return c ? a + b + c : a + b;
}
console.log(add(2, 3))

//Arrow function with default parameter values
const subtract = (a:number, b:number, c: number = 20) => (a - b - 20);
console.log(subtract(10, 30));

//Function
const divide = function (a:number, b:number) : number{
    return a / b;
}
console.log(divide(50, 10));

//Rest

function addWithRestParameters(a:number, b:number, ...c : number[]): number{
    return a + b + c.reduce((acc, v)=> acc + v, 0);
}