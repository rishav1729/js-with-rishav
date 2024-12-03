function flatArr(ar) {
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

let r = flatArr(arr);
console.log(r);
