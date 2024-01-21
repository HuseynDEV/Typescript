//------------------------------------Arrays--------------------------------
let firstNames1: string[] = ["Can", "Huseyn", "Ahmet"]
let firstNames2: Array<string> = ["Can", "Huseyn", "Ahmet"]
console.log(firstNames2)
// 
let arr = [1, 2, 'Name', true, false, "Paul"]
// 
let fruits: Array<string>;
fruits = ["adam", "john"]



let ids: Array<number>;
ids = [1, 2, 5, 6]


let values1: (string | number)[] = ["Apple", 12, 23, "MacBook"]

let values2: Array<string | number> = ["Apple", 12, 23, "MacBook"]

console.log(values1, values2)


// -----------------------------------Tuple-------------------------------------------

let Id: number = 1
let instructorName: string = "Huseyn"

// deyerleri uygun olaraq vermek lazimdir yeni 1e number 2e string
let instructor: [number, string] = [1, "Huseyn"]
console.log(instructor)


// ----------------------------------Object--------------------------------------------------

type Person = {
    age: number,
    name: string,
    worker: boolean
}

let objects: Person

objects = {
    age: 20,
    name: "Huseyn",
    worker: true
}

let person: {
    age: number,
    name: string,
    worker: boolean
}
person = {
    age: 20,
    name: "Huseyn",
    worker: true
}
console.log(objects.age)

// -----------------------------------Enum------------------------------------
enum Media {
    Newspaper = 1,
    Newsletter,
    Magazine,

}

enum PrintMedia {
    Newspaper = "NEWS",
    Newsletter = "Letter",
    Magazine = "Magazine",
}

// console.log(PrintMedia.Newsletter)

// -----------------------------------Unin-------------------------

let code: string | number | boolean = true;

// ------------------------------------Any---------------------------

let someThing: any = true
let someThing2: any = 12
let someThing3: any = "Huseyn"

// -----------------------------------Void---------------------------
// geri deyer gondermirse void olur burada return olmur

function sayHello():void{
console.log('data')
}

sayHello()

// ----------------------------------Never----------------------------
//sadece xeta gondermek ucun

function throwError(errorMsg:string):never{
    throw new Error(errorMsg)
}

throwError('Xeta')