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
    console.log("Name", emp.name);
    if ('privileges' in emp) {
        console.log("Privileges" + emp.privileges);
    }
}
