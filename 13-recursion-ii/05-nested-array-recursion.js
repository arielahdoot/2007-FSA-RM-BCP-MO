/*

https://goo.gl/9tzNEC

https://goo.gl/46nYK4

*/
function concatEls(array) {
  let finalString = '';
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    // checking to see is this nested
    if (Array.isArray(element)) {
      // recursive case
      const nestedArr = element;
      const nestedConcat = concatEls(nestedArr); // will return the string 'bc'
      finalString += nestedConcat;
    } else {
      // base case
      finalString += element;
    }
  }
  return finalString;
}

let result = concatEls(['a', ['b', 'd']]);
console.log(result);
