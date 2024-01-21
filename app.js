//------------------------------------Arrays--------------------------------
var firstNames1 = ["Can", "Huseyn", "Ahmet"];
var firstNames2 = ["Can", "Huseyn", "Ahmet"];
console.log(firstNames2);
// 
var arr = [1, 2, 'Name', true, false, "Paul"];
// 
var fruits;
fruits = ["adam", "john"];
var ids;
ids = [1, 2, 5, 6];
var values1 = ["Apple", 12, 23, "MacBook"];
var values2 = ["Apple", 12, 23, "MacBook"];
console.log(values1, values2);
// -----------------------------------Tuple-------------------------------------------
var Id = 1;
var instructorName = "Huseyn";
// deyerleri uygun olaraq vermek lazimdir yeni 1e number 2e string
var instructor = [1, "Huseyn"];
console.log(instructor);
var objects;
objects = {
    age: 20,
    name: "Huseyn",
    worker: true
};
var person;
person = {
    age: 20,
    name: "Huseyn",
    worker: true
};
console.log(objects.age);
// -----------------------------------Enum------------------------------------
var Media;
(function (Media) {
    Media[Media["Newspaper"] = 1] = "Newspaper";
    Media[Media["Newsletter"] = 2] = "Newsletter";
    Media[Media["Magazine"] = 3] = "Magazine";
})(Media || (Media = {}));
var PrintMedia;
(function (PrintMedia) {
    PrintMedia["Newspaper"] = "NEWS";
    PrintMedia["Newsletter"] = "Letter";
    PrintMedia["Magazine"] = "Magazine";
})(PrintMedia || (PrintMedia = {}));
// console.log(PrintMedia.Newsletter)
// -----------------------------------Unin-------------------------
var code = true;
// ------------------------------------Any---------------------------
var someThing = true;
var someThing2 = 12;
var someThing3 = "Huseyn";
// -----------------------------------Void---------------------------
// geri deyer gondermirse void olur burada return olmur
function sayHello() {
    console.log('data');
}
sayHello();
// ----------------------------------Never----------------------------
//sadece xeta gondermek ucun
function throwError(errorMsg) {
    throw new Error(errorMsg);
}
// throwError('Xeta')
// -------------------------------interference------------------------
var sayac = 0;
// sayac='12' burada xeta olacaq cunki bunun tipi artqi number olaraq teyin edilib
console.log(typeof sayac);
// --------------------------------Assertion----------------------------
var code2 = 123;
var empCode = code2;
var employee = {};
employee.name = 'Huseyn';
