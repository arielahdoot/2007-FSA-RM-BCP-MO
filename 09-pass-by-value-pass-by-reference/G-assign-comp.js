// Variable Assignment: Primitive Values

// http://pythontutor.com/javascript.html 

/* when you assign a complex value to a variable, the variable 'stores' a copy of that REFERENCE */

/* 
- This first example contains two separately created arrays. 
- This means that they contain references to different arrays in memory, so any changes made to one will NOT affect the other.
*/

let first = [10, 20];
/*
first: 0x001 => [10,20]
*/

let second = [10, 20]; // second stores a new reference to a new array
/*
first: 0x001 => [10,20]
second: 0x002 => [10,20]
*/

/* since first and second reference different arrays, pushing a value into second will not affect the array referenced by first */
second.push(30);
/*
first: 0x001 => [10,20]
second: 0x002 => [10,20,30]
*/

console.log(first);
console.log(second);

/*
Notes:
------

*/

// ------------------------------------------------
// PART 2 OF COMPLEX ASSIGNMENT - SAME REFERENCE
// ------------------------------------------------

/* 
- This next example contains one created array, and another variable that is assigned to the same array.
- This means that they contain references to the SAME array in memory, so any changes made to one WILL affect the other.
*/

// let first = [10, 20];
// /*
// first: 0x001 => [10,20]
// */

// let second = first; /* second now stores a copy of the REFERENCE that was originally stored in first */
// /*
// first: 0x001 => [10,20]
// second: 0x001 => [10,20]
// */

// /* first and second share the same reference to the same array! */
// second.push(30);
// /*
// first: 0x001 => [10,20,30]
// second: 0x001 => [10,20,30]
// */

// console.log(first);
// console.log(second);

/*
Notes:
------

*/

// ------------------------------------------------
// PART 3 OF COMPLEX ASSIGNMENT - SLICE
// ------------------------------------------------

/* 
- Okay let's bring .slice into the mix
- If you recall, .slice returns a brand new array that is a copy of one or more of the elements of the original array
- Note that because a brand new array is returned, that means that it has its own reference, and does not refer to the original array AT ALL.
*/

// let first = [10, 20];
// /*
// first: 0x001 => [10,20]
// */

// let second = first.slice(); // slice creates a new array!
// /*
// first: 0x001 => [10,20]
// second: 0x002 => [10,20]
// */

// second.push(30); // first and second reference different arrays
// /*
// first: 0x001 => [10,20]
// second: 0x002 => [10,20,30]
// */

// console.log(first);
// console.log(second);

/*
Notes:
------

*/


// ------------------------------------------------
// PART 3 OF COMPLEX ASSIGNMENT - OBJECTS
// ------------------------------------------------

/*
Important Note:
----------------
I know that I used arrays in these past few examples, but this concept of copying the reference applies to working with objects as well, since objects are also complex values.
*/

// So in this example, we're going to work with objects instead

// let first = {name: 'Ariel'};
// /*
// first: 0x001 => {name: 'Ariel'}
// */

// let second = first; /* second now stores a copy of the REFERENCE that was originally stored in first */
// /*
// first: 0x001 => {name: 'Ariel'}
// second: 0x001 => {name: 'Ariel'}
// */

// /* first and second share the same reference to the same object! */
// second.name = 'Sulamita';
// /*
// first: 0x001 => {name: 'Sulamita'}
// second: 0x001 => {name: 'Sulamita'}
// */

// console.log(first);
// console.log(second);

/*
Notes:
------

*/