console.log('adwawd')

const printOutput: (output: string) => void = output => console.log(output)
printOutput('5')


type Admin = {
    name: string,
    privileges: string[]
}

type Employee = {
    name: string,
    startDate: Date
}

// type ElevatedEmployee = Admin & Employee

interface ElevatedEmployee extends Admin, Employee { }

const e1: ElevatedEmployee = {
    name: "Huseyn",
    privileges: ['awdawd'],
    startDate: new Date()
}


type Combinable = string | number
type Numeric = number | boolean

type Universal = Combinable & Numeric


function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString()
    }
    return a + b
}


console.log(add(12, 12))

type UnknownEmployee = Employee | Admin


function printEmployee(emp: UnknownEmployee) {
    // console.log("Name", emp.name);

    // if('privileges' in emp){
    //     console.log("Privileges"+emp.privileges)

    // }

    console.log(emp.name)
    if ('privileges' in emp) {
        console.log(emp.privileges)
    }
}




printEmployee({ name: "wadaw", privileges: ['awdawd'], })

type name1 = {
    name: string,
    age: number
}

type name2 = {
    name: string,
    ary: string[]
}

type allName = name2 | name1

function getName(data: allName) {
    console.log(data.name)
    if ('age' in data) {
        console.log(data.age)
    }
}

getName({ name: 'awadw', age: 12 })

// --------------------------unions-----------------------

interface Bird {
    flyingSpeed: Number
}

interface Horse {
    runningSpeed: number
}

type Animal = Bird | Horse


function moveAnimal(animal: Animal) {
    if ('flyingSpeed' in animal) {
        console.log(animal.flyingSpeed)
    }
}