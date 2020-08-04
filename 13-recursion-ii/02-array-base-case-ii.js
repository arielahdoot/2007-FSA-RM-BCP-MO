function logsAnArray(array) {
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    console.log(element);
    if (Array.isArray(element)) {
      for (let j = 0; j < element.length; j++) {
        
      }
    }
  }
}
logsAnArray([1, [2, 3]]); // what if the input is nested?

/* 

consider element on line 3. that could be a number, or it could be another array!
if element is an array, we want to log every number inside of it. if only we had a function that takes an array and logs out all of its values! oh wait… 

*/