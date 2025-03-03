
let counter = 0;
const getData = () => {
    // calls an API and get data
    console.log("Fetching data", counter++);
}

const doSomeMagic = function (fn, d) {
   
    let timer;
    return function () {
        let context = this, 
            args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            getData.apply(context, arguments)
        }, d) 
    }
}

const betterFunction = doSomeMagic(getData, 300);