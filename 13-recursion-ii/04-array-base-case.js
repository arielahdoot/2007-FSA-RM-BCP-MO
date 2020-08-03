/*

https://goo.gl/tDaWyq

*/

function concatEls(array) {
  let finalString = '';
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    finalString += element;
  }
  return finalString;
}


let result = concatEls(['a', 'b', 'c']);
console.log(result);

