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
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var person = {
    firstName: "Huseyn",
    lastName: "ALizada"
};
getFullName2(person);
console.log(person.firstName);
var format;
format = function (str, isUpper) {
    return isUpper ? str.toLocaleLowerCase() : str.toLocaleUpperCase();
};
// ---------------------Generics---------------------
var numbers = [12, 32, 43, 12];
var strings = ['asdaw', 'effesf', 'wawdad'];
function getRandom(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
console.log(getRandom(numbers));
console.log(getRandom(strings));
