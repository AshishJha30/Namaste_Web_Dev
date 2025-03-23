
// Handling with Arguments
const throttle = (fun, limit) => {
    let flag = true;
    return function() {
        let context = this, args = arguments;
        if(flag) {
            // fun();
            fun.apply(context, args)
            flag = false;
            setTimeout(() => {
                flag = true;
            }, limit)
        }
    }
}

// const throttle = (fun, limit) => {
//     let flag = true;
//     return function() {
//         if(flag) {
//             fun();
//             flag = false;
//             setTimeout(() => {
//                 flag = true;
//             }, limit)
//         }
//     }
// }

const expensive = (arguments) => {
    console.log("This is expensive throttling")
}

const betterExpensive = throttle(expensive, 5000);

window.addEventListener('resize', betterExpensive);

