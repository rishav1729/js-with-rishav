function f1() {
  function f2() {
    console.log(a);
  }
  let a = 20;

  return f2;
}
// console.log(a)
let r = f1();
r();
