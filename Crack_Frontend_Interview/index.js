// let name = {
//     firstname: "Ashish",
//     lastname: "Jha",
//     // printFullName: function() {
//     //     console.log(this.firstname + " " + this.lastname);
//     // }
// };
// let printFullName = function(city, state) {
//     console.log(this.firstname + " " + this.lastname + " from " + city + ", " + state);
// }

// // name.printFullName();

// printFullName.call(name, "Ghaziabad", "U.P");

// let name2 = {
//     firstname: "Sandeep",
//     lastname: "Jha",
// }

// let name3 = {
//     firstname: "Ram",
//     lastname: "Ji"
// }
// //function borrowing, using call method
// // name.printFullName.call(name2);
// printFullName.call(name2, "Ghaziabad", "U.P");

// //now we wil use apply method, only difference is for multiple parameters we will use array list
// printFullName.apply(name3, ["Ayodhya", "U.P"])

// // Bind method, It creates the copy of method and bind it to new variable without calling it
// let printMyName = printFullName.bind(name3, "Ayodhya", "U.P");
// console.log(printFullName);
// printMyName();


// // Ep - 2
// let name = {
//     firstname: "Ashish",
//     lastname: "Jha",
// }

// let printName = function(city, state, country) {
//     console.log(this.firstname + " " + this.lastname + " " + city + ", " + state + ", " + country);
// }

// let printMyName = printName.bind(name, "Ghz");
// printMyName("UP", "India")

// Function.prototype.mybind = function(...args) {

//     // this -> printName   this m printName function aajayega
//     let obj = this,
//     params = args.slice(1);
//     return function(...args2) {
//         // printName();
//         obj.apply(args[0], [...params, ...args2]);
//     }
// }

// let printMyName2 = printName.mybind(name, "Ghz");
// printMyName2("UP", "India");
// // console.log(printMyName2)

// Ep - 3 Currying (Making a copy of another function by presetting some values)

// Using Bind method
// let multiply = function (x, y) {
//     console.log(x * y);
// }

// // It's like 
// let multiply = function (x, y) {
//     x = 2;
//     console.log(x * y);
// }

// Using Closure method
let multiplyClosure = function(x) {
    return function(y) {
        console.log(x * y)
    }
}

// let multiplyByTwo = multiply.bind(this, 2);
// multiplyByTwo(4);

// let multipleByThree = multiply.bind(this, 3);
// multipleByThree(4);

let multiplyByTwo = multiplyClosure(2);
multiplyByTwo(4);

let multiplyByThree = multiplyClosure(3);
multiplyByThree(10);