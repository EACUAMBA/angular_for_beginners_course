"use strict";
/**
 * When we type a var, we can use some methods of the type of the var, like string tpe has methods for uppercase and etc.
 */
let lname;
lname = "Edilson";
let newname = lname.toUpperCase();
console.log(newname);
let age;
age = 23;
// age = "25" //We have an error because "25" is not a number
let result = parseInt("23"); //return a number
// Booleans
//You need to assign a variable before using;
let isValid = false;
console.log(isValid);
//Arrays
//We can specify the type of the values in the list.
let empList;
let empList2;
// empList = ["Edilson", "Rodrigo", 20]; //20 is not a String
let numList;
numList = [5, 3, 4, 2, 1];
let results = numList.filter((num) => num > 2);
let resultNum = numList.find((num) => num === 2);
console.log(results);
let c = 2 /* Color.Blue */;
console.log(c);
