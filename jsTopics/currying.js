// currying
function sum(a, b) {
  return a + b;
}

function currySum(a) {
  return function (b) {
    return a + b;
  };
}
let r = currySum(10)(20);
console.log(r);
