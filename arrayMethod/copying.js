// deep copy using array

const arr = [32, 54, 798, [98, 30], 32];

// const arr2=[...arr] // shallow copy

const arr2 = JSON.parse(JSON.stringify(arr)); // deep copy to some extact
arr2[3][1] = 100;

console.log(arr);
console.log(arr2);

// deep copy using obj
// const userDetails = require("./q");

const obj = {
  name: "aditya",
  age: 29,
  address: {
    city: "hyd",
    pincode: 800015,
  },
};

// const obj2=obj
// const obj2={...obj} // shallow copy

const obj2 = JSON.parse(JSON.stringify(obj));

obj2.address.pincode = 800034;

console.log(obj);
console.log(obj2);

// doubts
const arr = [32, 54, 798, [98, 30], 32];
const obj = { name: "adi" };

console.log(typeof arr);
console.log(typeof obj);

console.log(Array.isArray(arr));
console.log(Array.isArray(obj));

console.log(typeof JSON.stringify(arr));
console.log(Array.isArray(JSON.stringify(arr)));


//==========================================

// const str='{"name":"aditya"}'
// console.log(JSON.parse(str))


const obj={name:"aditya"}
// console.log(obj.toString())
// console.log(JSON.stringify(obj))

console.log(JSON.parse(JSON.stringify(obj)))

const arr = [32, 54, 798, [98, 30], 32];

// console.log(arr.toString())
// console.log(JSON.stringify(arr))
console.log(JSON.parse(JSON.stringify(arr)))