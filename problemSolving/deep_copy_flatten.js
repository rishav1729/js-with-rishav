// const usersDetails = require("./exportFiles/q");
const { log } = require("console");

//=============deep copy and flatten object=============

let person = {
    name: "rishav",
    age: 25,
    address: {
        building: "ganesh villa",
        area: "madhapur",
        pincode: 800012,
    },
};

function flattenObject(obj) {
    let copy = {};
    for (let key in obj) {
        if (typeof obj[key] === "object") {
            copy = { ...copy, ...flattenObject(obj[key]) };
        } else {
            copy = { ...copy, [key]: obj[key] };
        }
    }
    return copy;
}

log(flattenObject(person));

function deepCopyObj(obj) {
    let copy = {};
    for (let key in obj) {
        if (typeof obj[key] === "object") {
            // log("when obj",copy)
            copy = { ...copy, [key]: deepCopyObj(obj[key]) };
        } else {
            log("when simple", copy);
            copy = { ...copy, [key]: obj[key] };
        }
    }
    return copy;
}

// log(deepCopy(person));

// let o={
//     name:"aditya",
//     age:24,
//     city:"hyd"
// }

// let key="age"

// o[key]="rishav"
// log(o)

//=============deep copy and flatten array=============

const arr = [12, 43, 56, [43, 65, 7], 67, 7];
function flattenArr(ar) {
    let res = [];
    for (let i = 0; i < ar.length; i++) {
        if (Array.isArray(ar[i])) {
            res = [...res, ...flatArr(ar[i])];
        } else {
            res = [...res, ar[i]];
        }
    }
    return res;
}

// let r = flattenArr(arr);
// console.log(r);

function deepCopyArr(ar) {
    let copy = [];
    for (let i = 0; i < ar.length; i++) {
        if (!Array.isArray(ar[i])) {
            copy = [...copy, ar[i]];
        } else {
            copy = [...copy, deepCopyArr(ar[i])];
        }
    }
    return copy;
}

// log(deepCopyArr(arr));
