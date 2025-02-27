
var x = 1;
a();
b();

console.log(x);

function a() {
    var x = 10;
    console.log(x);
}

function b() {
    var x = 100;
    console.log(x);
}

var a;
console.log(a);
a = 10;
console.log(a);

var a = 10;
console.log("Hello Ji");
var a = 100;
console.log(a);

let a;
console.log(a);
a = 100;
console.log(a);

function x() {
    var a = 10;
    function y() {
        console.log(a);
    }
    return y;
}
// x();
var z = x();
console.log(z);
z();

function z() {
    var a = 10;
    function x() {
        var b = 20;
        function y() {
            console.log(a, b);
        }
        y();
    }
    x();
}
z();

Closures
function x() {
    var i = 10;
    setTimeout(function () {
        console.log(i);
    }, 3000)
    console.log("Namaste JS");
}

x();

function x() {
   for(let i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, i*1000)
        console.log("Namaste JS");  
        // console.log("Namaste JS 2");  
   }
    
}
x();

Solve above using var only 

function x() {

    function close() {
        for(var i = 1; i <= 5; i++) {
            setTimeout(function () {
                console.log(i);
            }, i*1000);
        }
        close(i);
    }
    console.log("Namaste JS");
}

x();

const radius = [2, 6, 4, 3];


const area = function(radius, logic) {
    let output = [];
    for(let i = 0; i < radius.length; i++) {
      output.push(logic(radius[i]));
    }
    return output;
} 

const circleArea = function(radius) {
    // let output = [];
    // for(let i = 0; i < radius.length; i++) {
    //     output.push(Math.PI * radius[i] * radius[i]);
    // }
    // return output;
    return Math.PI * radius * radius;

}
// console.log(circleArea(radius))
console.log(area(radius, circleArea));

const circumference = function(radius) {
    // let output = [];
    // for(let i = 0; i < radius.length; i++) {
    //     output.push(2 * Math.PI * radius[i]);
    // }
    // return output;
    return (2*Math.PI*radius);
}
console.log(area(radius, circumference));


const diameter = function(radius) {
    // let output = [];
    // for(let i = 0; i < radius.length; i++) {
    //     output.push(2 * radius[i]);
    // }
    // return output;
    return (2*radius)
}
// console.log(diameter(radius))
console.log(area(radius, diameter));


const users = [
    {firstname: "Ashish", lastName: "Jha", age: 24},
    {firstname: "Rahul", lastName: "Jha", age: 26},
    {firstname: "Sandeep", lastName: "Jha", age: 26},
    {firstname: "Raj", lastName: "Jha", age: 32},
]

// const output = users.filter( (x) => x.age < 30).map( (x) => x.firstname);
const output = users.reduce( function (acc, curr) {
    if(curr.age > 25) {
        acc.push(curr.firstname);
    }
    // else {
    //     acc[curr.age] = curr.firstname; 
    // }
    return acc;
}, [])

console.log(output);