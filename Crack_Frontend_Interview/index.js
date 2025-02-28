let name = {
    firstname: "Ashish",
    lastname: "Jha",
    // printFullName: function() {
    //     console.log(this.firstname + " " + this.lastname);
    // }
};
let printFullName = function(city, state) {
    console.log(this.firstname + " " + this.lastname + " from " + city + ", " + state);
}

// name.printFullName();

printFullName.call(name, "Ghaziabad", "U.P");

let name2 = {
    firstname: "Sandeep",
    lastname: "Jha",
}

let name3 = {
    firstname: "Ram",
    lastname: "Ji"
}
//function borrowing, using call method
// name.printFullName.call(name2);
printFullName.call(name2, "Ghaziabad", "U.P");

//now we wil use apply method, only difference is for multiple parameters we will use array list
printFullName.apply(name3, ["Ayodhya", "U.P"])

// Bind method, It creates the copy of method and bind it to new variable without calling it
let printMyName = printFullName.bind(name3, "Ayodhya", "U.P");
console.log(printFullName);
printMyName();
