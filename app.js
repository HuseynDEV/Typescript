"use strict";
// //------------------------------------Arrays--------------------------------
// let firstNames1: string[] = ["Can", "Huseyn", "Ahmet"]
// let firstNames2: Array<string> = ["Can", "Huseyn", "Ahmet"]
// console.log(firstNames2)
// // 
// let arr = [1, 2, 'Name', true, false, "Paul"]
// // 
// let fruits: Array<string>;
// fruits = ["adam", "john"]
function getFullName2(person) {
    return `${person.firstName} ${person.lastName}`;
}
let person = {
    firstName: "Huseyn",
    lastName: "ALizada"
};
getFullName2(person);
console.log(person.firstName);
let format;
format = function (str, isUpper) {
    return isUpper ? str.toLocaleLowerCase() : str.toLocaleUpperCase();
};
// ---------------------Generics---------------------
let numbers = [12, 32, 43, 12];
let strings = ['asdaw', 'effesf', 'wawdad'];
function getRandom(items) {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
console.log(getRandom(numbers));
console.log(getRandom(strings));
// ------------------unknown------------------------
let userInput;
userInput = 12;
userInput = 'data name';
// ---------------------never------------------------
// function generateError(message: string, code: number): never {
//     throw { message: message, errorCode: code }
// }
// generateError("An error occurred", 500)
// function generateError2(message: string, code: number): any {
//     throw { message: message, errorCode: code }
// }
// generateError2("An error occurred", 500)
function printResult(num) {
    console.log("Result " + num);
}
let combineValues;
combineValues = printResult;
console.log(combineValues);
