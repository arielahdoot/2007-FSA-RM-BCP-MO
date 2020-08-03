/* eslint-disable guard-for-in */
/* 
write a function sumVals that sums the values in an object 

https://goo.gl/Gu3jWd
*/
function sumVals(obj) {
  let sum = 0;
  for (let key in obj) {
    let value = obj[key];
    sum += value;
  }
  return sum;
}

let result = sumVals({ a: 10, b: 20 }); 
console.log(result); // 30