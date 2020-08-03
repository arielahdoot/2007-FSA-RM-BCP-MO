/* 
when writing recursive functions that will handle a nested data structure, it's good to start by making sure it works with a flat data structure. think of this as the base case!

*/
function logsAnArray(array) {
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    console.log(element);
  }
}

logsAnArray([1, 2, 3]);
