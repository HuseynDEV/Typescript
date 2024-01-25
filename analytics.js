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
