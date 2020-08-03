/* 

https://goo.gl/XRkfQu

*/

function logsAnArray(array) {
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    // is it a nested array??
    if (Array.isArray(element)) {
      // call function on nested array
      logsAnArray(element);
    } else {
      // base case
      console.log(element);
    }

  }
}

logsAnArray([1, [2, [3, [4, 5]]]]);
