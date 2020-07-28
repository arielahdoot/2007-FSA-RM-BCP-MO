// Using the equality (===) operator to compare primitive and complex values to each other.
 
/* 
they work the exact same way as assigning and passing in as arguments - with primitives we work with the value, while with complex values, we work with the reference.
*/

// let array1 = [1, 2, 3]; 
// let array2 = [1, 2, 3];

// console.log(array1 === array2); // are they equal?

/*
Notes:
------

*/

// ------------------------------------------------
// PART 2 OF EQUALITY - SAME REFERENCE EXAMPLE
// ------------------------------------------------

let array1 = [1, 2, 3]; 
let array2 = array1; // array1 and array2 share the same reference

console.log(array1 === array2); // are they equal?

/*
Notes:
------

*/