
 document.querySelector("#form").addEventListener('keyup', (e) => {
    console.log(e);
    if(e.target.dataset.uppercase != undefined) {
        e.target.value = e.target.value.toUpperCase();
    };
 })


// // Event Delegation
// document.querySelector("#category").addEventListener('click', (e) => {
//     console.log(e.target);
//     if(e.target.tagName == "LI") {
//         window.location.href = "/" + e.target.id;
//     }
//     // console.log("Category called");
// })


// // Event Bubbling and Capturing 
// document.querySelector("#grandParent").addEventListener("click", () => {
//     console.log("Grandparent Clicked")
// }, false)
// document.querySelector("#parent").addEventListener("click", () => {
//     console.log("Parent Clicked")
// }, true)
// document.querySelector("#child").addEventListener("click", () => {
//     console.log("Child Clicked")
// }, true)