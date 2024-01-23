// //------------------------------------Arrays--------------------------------
// let firstNames1: string[] = ["Can", "Huseyn", "Ahmet"]
// let firstNames2: Array<string> = ["Can", "Huseyn", "Ahmet"]
// console.log(firstNames2)
// // 
// let arr = [1, 2, 'Name', true, false, "Paul"]
// // 
// let fruits: Array<string>;
// fruits = ["adam", "john"]



// let ids: Array<number>;
// ids = [1, 2, 5, 6]


// let values1: (string | number)[] = ["Apple", 12, 23, "MacBook"]

// let values2: Array<string | number> = ["Apple", 12, 23, "MacBook"]

// console.log(values1, values2)


// // -----------------------------------Tuple-------------------------------------------

// let Id: number = 1
// let instructorName: string = "Huseyn"

// // deyerleri uygun olaraq vermek lazimdir yeni 1e number 2e string
// let instructor: [number, string] = [1, "Huseyn"]
// console.log(instructor)


// // ----------------------------------Object--------------------------------------------------

// type Person = {
//     age: number,
//     name: string,
//     worker: boolean
// }

// let objects: Person

// objects = {
//     age: 20,
//     name: "Huseyn",
//     worker: true
// }

// let person: {
//     age: number,
//     name: string,
//     worker: boolean
// }
// person = {
//     age: 20,
//     name: "Huseyn",
//     worker: true
// }
// console.log(objects.age)

// // -----------------------------------Enum------------------------------------
// enum Media {
//     Newspaper = 1,
//     Newsletter,
//     Magazine,

// }

// enum PrintMedia {
//     Newspaper = "NEWS",
//     Newsletter = "Letter",
//     Magazine = "Magazine",
// }

// // console.log(PrintMedia.Newsletter)

// // -----------------------------------Unin-------------------------

// let code: string | number | boolean = true;

// // ------------------------------------Any---------------------------

// let someThing: any = true
// let someThing2: any = 12
// let someThing3: any = "Huseyn"

// // -----------------------------------Void---------------------------
// // geri deyer gondermirse void olur burada return olmur

// function sayHello(): void {
//     console.log('data')
// }

// sayHello()

// // ----------------------------------Never----------------------------
// //sadece xeta gondermek ucun

// function throwError(errorMsg: string): never {
//     throw new Error(errorMsg)
// }

// // throwError('Xeta')


// // -------------------------------interference------------------------
// let sayac = 0
// // sayac='12' burada xeta olacaq cunki bunun tipi artqi number olaraq teyin edilib
// console.log(typeof sayac)

// // --------------------------------Assertion----------------------------

// let code2: any = 123

// let empCode = <number>code2

// interface Employee {
//     name: string,
//     code: number
// }
// let employee = <Employee>{}
// employee.name = 'Huseyn'


// function name2(ad: string, age: number): any {
//     console.log(ad, age)
// }
// name2("Huseyn", 12)








// // -------------------------------interface-------------------------------


// interface Person2 {
//     firstName: string,
//     lastName: string,
//     middleName?: string

// }
// // bu oxunaqli deyil
// function getFullName(person: Person2) {
//     return `${person.firstName} ${person.lastName} ${person.middleName} `
// }

// let person2 = {
//     firstName: "Huseyn",
//     lastName: "Alizada",
//     // middleName:"dwdadw"
// }

// console.log(getFullName(person2))



// // -------------------------------------------------------------------
// interface StringFormat {
//     (str: string, isUpper: boolean): string,

// }

// let format: StringFormat

// format = function (str: string, isUpper: boolean) {
//     return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase()
// }

// console.log(format("Huseyn", true))



// // ------------------overloading----------------
// function add(a:number, b:string):string
// function add(a:string, b:string):string


// function add(a:any, b:any):any{
//     console.log(a+b)
// }

// add(12,'12')


// --------------------------Interface------------------

interface Person12 {
    firstName: string,
    lastName: string
}


interface Items extends Person12 {
    age?: number

}

function getFullName2(person: Items): string {
    return `${person.firstName} ${person.lastName}`
}

let person = {
    firstName: "Huseyn",
    lastName: "ALizada"
}

getFullName2(person)

console.log(person.firstName)


interface StringFormat2 {
    (str: string, isUpper: boolean): string
}


let format: StringFormat2
format = function (str: string, isUpper: boolean): string {
    return isUpper ? str.toLocaleLowerCase() : str.toLocaleUpperCase()
}




// ---------------------Generics---------------------
let numbers = [12, 32, 43, 12]
let strings = ['asdaw', 'effesf', 'wawdad']
function getRandom<T>(items: T[]):T {
    let randomIndex = Math.floor(Math.random() * items.length)
    return items[randomIndex]
}

console.log( getRandom(numbers))
console.log( getRandom(strings))

