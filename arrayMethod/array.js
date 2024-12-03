// PQ1. remove duplicates from array

// let arr1 = [12, 34, 45, 65, 54, 23, 12, 45, 67, 54];

// let arr2 = [...new Set(arr1)];
// console.log(arr2);

// PQ2.find maximum value from the array

// let arr2 = [12, 34, 45, 65, 54, 23, 12, 45, 67, 54];

// let max = arr2[0];
// for(let i = 0 ; i < arr2.length ; i++){
//   if (max < arr2[i]){
//     max = arr2[i]
//   }
// }
// console.log(max)

// PQ3. Write a JavaScript function to get the last n  element of an array. n should be given as a parameter to the function.

//using slice

// function nElement(arr,n){
//   // let arr = []
//   1,2,3,4,45,45,54,4,5,54,5,56
//   1,2,3,4,5,6,7,8,9,10,11,12,13
//   let newarr = arr.slice(arr.length-n)
//   return(newarr)
// }

// using push and  indexOf

// function nElement(arr,n){
//   let newarr = []
//   for(let i=0; i<arr.length; i++){
//     let a = arr[i]
//     if(arr.indexOf(a)>=arr.length-n-1){
//       newarr.push(arr[i])
//     }
//   }
//   return newarr
// }

// using for loop

// function nElement(arr,n){
//   let newarr= []
//   for(let i=arr.length-1; i>arr.length-n-1; i--){
//     let e = arr[i]
//     // newarr.push(e)
//     newarr.unshift(e)
//   }
//   return newarr
// }

// let arr = [1, 2, 3, 4, 45, 45, 54, 4, 5, 54, 5, 56];
// console.log(nElement(arr,5))

// PQ4. Out of given 3 arrays with n number of elements, find out the common element(s) for all 3 arrays.

// let arr1 = [21, 43, 56, 71, 32, 42, 67, 12];
// let arr2 = [99, 26, 43, 56, 32, 42, 21, 67];
// let arr3 = [24, 44, 56, 74, 32, 90, 12, 67];

// let commonElements = arr1.sr(
//   (element) => arr2.includes(element) && arr3.includes(element)
// );

// console.log("Common Elements:", commonElements);

//======================================================

function sumOfArrayElement(arr) {
  let sum = 0;
  arr.forEach((element) => (sum += element));
  return sum;
}

// let arr = [1,2,3,3,4,55,0]
// console.log("sum:",sumOfArrayElement(arr))

// ==================================================

function maxValue(arr) {
  let maxvalue = arr[0];
  arr.forEach((element) => {
    if (element > maxvalue) {
      maxvalue = element;
    }
  });
  return maxvalue;
}

// let arr = [1, 2, 23, 3, 4, 5]

// console.log(maxValue(arr))

// ===================================================

function reverseArray(arr) {
  let revarr = [];
  arr.forEach((element) => {
    revarr.unshift(element);
  });
  return revarr;
}

let arr = [1, 2, 23, 3, 4, 5];

console.log(reverseArray(arr));

// ====================================================
