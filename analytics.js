"use strict";
console.log('adwawd');
const printOutput = output => console.log(output);
printOutput('5');
const e1 = {
    name: "Huseyn",
    privileges: ['awdawd'],
    startDate: new Date()
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
console.log(add(12, 12));
function printEmployee(emp) {
    // console.log("Name", emp.name);
    // if('privileges' in emp){
    //     console.log("Privileges"+emp.privileges)
    // }
    console.log(emp.name);
    if ('privileges' in emp) {
        console.log(emp.privileges);
    }
}
printEmployee({ name: "wadaw", privileges: ['awdawd'], });
function getName(data) {
    console.log(data.name);
    if ('age' in data) {
        console.log(data.age);
    }
}
getName({ name: 'awadw', age: 12 });
function moveAnimal(animal) {
    if ('flyingSpeed' in animal) {
        console.log(animal.flyingSpeed);
    }
}
function addItem(a, b) {
    const result = a + b;
    return result;
}
function calculate(a, b, calcFn) {
    console.log(calcFn(a, b));
}
calculate(12, 15, addItem);
let name10 = "12";
let items = {
    name: "Huseyn",
    number: 12
};
console.log(items.number);
const textStorage = {
    storage: [],
    add(data) { }
};
function merge(a, b) {
    return Object.assign(Object.assign({}, a), b);
}
const newUser = merge({ name: "Max" }, { age: 34 });
const newUser2 = merge({ name: "Max" }, { age: 34 });
// const newUser = merge("awda", 12)
