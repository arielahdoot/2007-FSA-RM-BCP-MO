// Let's see how .slice with arrays fits into this

// http://pythontutor.com/javascript.html 

/* we showed earlier that .slice creates a copy of an array */

let array1 = [1, [2, 3]]; 
let array2 = array1.slice();

console.log(array2);
console.log(array1 === array2);// are they equal?

/*
Notes:
------

*/

// --------------------------------------------------
// PART 2 OF SLICE - COMPLEX VALS WITHIN COMPLEX VALS
// --------------------------------------------------

// But what if some of the elements inside the array were complex values themselves (ex. array, object)

/* if an array has a complex value as an element, only the REFERENCE to that complex value is copied into the new array */

/* that's why we say slice makes a "shallow" copy of an array; it doesn't make new copies of any complex values stored inside the array */


// let array1 = [1, [2, 3]]; 
// /*
// array1: 0x001 => [1, 0x002]
// Note: 0x002 is the address of the inner array, so:
// 0x002 => [2,3]
// */

// let array2 = array1.slice();
// /*
// array1: 0x001 => [1, 0x002]
// array2: 0x003 => [1, 0x002]
// 0x002 => [2,3]
// // notice that although the outer arrays are at different addresses, they both contain the SAME reference to the SAME inner array [2,3]
// */


// array1[0]++;
// /*
// array1: 0x001 => [2, 0x002]
// array2: 0x003 => [1, 0x002]
// 0x002 => [2,3]
// */

// array1[1].push(4);
// /*
// array1: 0x001 => [1, 0x002]
// array2: 0x003 => [1, 0x002]
// 0x002 => [2,3,4]
// */

// console.log(array2[1]);
// console.log(array1 === array2);
// console.log(array1[1] === array2[1]); // are they equal?

/*
Notes:
------

*/