

let user = {
    name: "Ashish",
    address: {
        personal: {
            city: "Ghaziabad",
            area: "Rajnagar"
        },
        office: {
            city: "Bengaluru",
            area: {
                landmark:"Nagavara",
            }
        }
    }
}

let finalObj = {};
let magic = (obj, parent) => {
    for(let key in obj) {
        // console.log("Obj[key]: " + obj[key]);
        // console.log("key: " + key);
        if(typeof(obj[key]) === 'object') {
            magic(obj[key], parent + "_" + key)
        }
        else{
            finalObj[parent + "_" + key] = obj[key];
        }
    }
}

magic(user, user)
console.log(finalObj);