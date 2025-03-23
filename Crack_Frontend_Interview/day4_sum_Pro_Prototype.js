let arr = ["Ashish", "Sandeep", "Aman"]
let obj = {
    name: "Ashish",
    age: 10,
    getIntro: function() {
        console.log("My name is " + this.name + " with age " + this.age);
    }
}
function fun() {

}

// let sum = a => b => b ? sum(a+b) : a;

//     // return function (b) {
//     //     if(b) {
//     //         return sum(a+b);
//     //     }
//     //     return a;
//     // } 

// // }

// console.log(sum(1)(2)(3)(4)()); 

// function sum(a) {
//     return function (b) {
//         if(b) {
//             return sum(a+b);
//         }
//         return a;
//     }
// }

// console.log(sum(1)(2)(3)(4)()); 

