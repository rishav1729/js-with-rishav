// const arr = ["rishav", 25, "hyd"];

const p = {
  name: "aditya",
  age: 25,
  city: "hyd",
};

// function f(arr) {
//   // let name= arr[0];
//   // let age= arr[1];
//   // let city= arr[2];
// destructuring
//   // let [name,,city]=arr

//   console.log(name, city);
// }

function f(p) {
  // let name= p.name;
  // let age= p.age;
  // let city=p.city

  //destructuring
  let { name, city } = p;
  console.log(name, city);
}

// f(arr);
f(p);
