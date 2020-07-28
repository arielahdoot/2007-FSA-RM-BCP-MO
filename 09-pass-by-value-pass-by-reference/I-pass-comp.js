// Passing complex values into functions.

/* when you assign a complex value to a variable, the variable stores a copy of that REFERENCE */

/* might be beneficial to paste all the code from this file into http://pythontutor.com/javascript.html to see how the variables change and where scope plays a part */

let myArray = [10];
/*
myArray: [10]
*/

function pushes20(array) {
  // let array = myArray;
  array.push(20);
  return array;
}

let returnedArray = pushes20(myArray);
/*
myArray: 0x001 => [10,20]
returnedArray: 0x001 => [10,20]
// not showing the value of array because it only exists inside the scope of the function pushes20()
*/

console.log(myArray);
console.log(returnedArray);


/* 
The following is a visualization of what happens specifically when we pass in the variable myArray ([10]) as an argument into the function pushes20 (Note: I will not be showing the value of myArray or returnedArray during this visualization because we are currently inside the function's scope)
----------------------------------------------------
function pushes20(array) {
  /*
  array: [10]
  */

  // array.push(20);
  /*
  array: [10,20]
  */

  //return array;
// }

/*
- Notice that the value of myArray, returnedArray, and array are the same. Why is that?
- REMEMBER: when you assign a complex value to a variable, the variable stores a copy of that REFERENCE
- The moment we passed in myArray as an argument into the pushes20 function, we assigned our parameter, array, to be equal to myArray, and because myArray is a complex value, the parameter array will store a copy of the REFERENCE contained in the myArray variable, not a copy of the array itself.
- So all the changes that were made to array in the pushes20 function call will affect the array stored in the array variable, AND will affect the array stored in the myArray variable, because they’re both pointing to the exact same array. 
- Finally, array is returned at the end of the pushes20 function, and is then stored in the returnedArray variable,and so the reference to the array is stored in returnedArray as well.
- This is why when you pass in complex values as arguments into functions it’s called Pass By Reference, because you’re passing in a copy of the reference as an argument to the function.
=
*/

/*
Notes:
------

*/