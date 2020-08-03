/* eslint-disable guard-for-in */
/* 

https://goo.gl/mVK9Jt

https://goo.gl/MWfh9V
*/

function sumVals(obj) {
  let sum = 0;
  for (let key in obj) {
    let value = obj[key];
    // is this a nested array??
    if (typeof value === 'object') {
      // recursive case
      const sumOfNestedObj = sumVals(value);
      sum += sumOfNestedObj;
    } else {
      // base case
      sum += value;
    }
  }
  return sum;
}


let result = sumVals({ a: 1, b: { c: 3 }}); // 4

// let result = sumVals({
//   a: 1,
//   b: {
//     c: {
//       d: {
//         e: 2,
//         f: 3
//       }
//     }
//   }
// })

console.log(result);