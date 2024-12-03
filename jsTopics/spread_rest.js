const arr = [32, 54, 798, [98, 30], 32];

// sprwad operator : used in copying
// const arr2=[...arr] // shallow copy

// rest operator : usedn in fn args

function f(n1, n2, ...args) {
  // console.log(args)
  // let sum=0;
  // for(let i=0;i<params.length;i++){
  //   sum+=args[i]
  // }
  // return sum
  console.log(n1, n2, args);
}

let n1 = 20;
let n2 = 30;
let n3 = 40;
let n4 = 50;

let r = f(n1, n2, n3, n4);
console.log(r);
