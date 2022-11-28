/**
 * When we type a var, we can use some methods of the type of the var, like string tpe has methods for uppercase and etc.
 */
let lname : string;
lname = "Edilson";
let newname = lname.toUpperCase();
console.log(newname);

let age: number;
age = 23;
// age = "25" //We have an error because "25" is not a number
let result = parseInt("23"); //return a number

// Booleans

//You need to assign a variable before using;
let isValid: boolean = false;
console.log(isValid)

//Arrays

//We can specify the type of the values in the list.
let empList : string[];
let empList2 : Array<string>;


// empList = ["Edilson", "Rodrigo", 20]; //20 is not a String

let numList : Array<number> ;
numList = [5, 3, 4, 2, 1];
let results = numList.filter((num)=> num > 2);
let resultNum = numList.find((num)=> num === 2);
console.log(results);

//Enums

const enum Color{
    Red,
    Green,
    Blue
}

let c: Color = Color.Blue;
console.log(c);

//Tuples
let swapNumbs: [first: number, second: number];

function swapNumbers(num1:number, num2:number) : [number, number]{
    return [num1, num2];
}

swapNumbs = swapNumbers(2,
    10);

//any
let departament : any;
departament = "Edilson";
departament = 20;