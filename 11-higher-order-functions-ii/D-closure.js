/* 
closure is the fact that an inner function can STILL access values defined in the outer function even after the outer function is finished running! */

function getGreeter() {
  console.log('getGreeter is running');
  let name = 'Marie'; 
  console.log('getGreeter is finishing');
  
  return function() {
    console.log('Hi', name, ': we are currently in the inner function');
  };
}

let greeter = getGreeter();
greeter(); 

// --------------------------
// EXAMPLE 1 PART 2 - Trying to access the name variable with
// a function declared outside
// --------------------------

// function notDeclaredInGetGreeter(){
//   console.log('Hi', name, ': we are currently in the inner function');
// }

// console.log();
// console.log('Testing the output of notDeclaredInGetGreeter:');
// console.log('--------------------');
// notDeclaredInGetGreeter(); // will this function's output match that of the function stored in the greeter variable?

/* How did closure play a part in this example?
--------
- On line 13 we returned the inner function, and assigned it to the variable greeter.
- On line 14 we invoke the function stored in the greeter variable, which prints out 'Hi Marie : we are currently in the inner function'
- but Marie was stored in the name variable, which was declared in the outer function, getGreeter
- so the fact that the function stored in the variable greeter had access to the name variable, even AFTER the getGreeter function already finished running = Closure 
- on the other hand, another function declared OUTSIDE of the getGreeter function, notDeclaredInGetGreeter, will also try to access the name variable for its output after the getGreeter function has already finished running, but will cause a ReferenceError.
*/

// --------------------------
// EXAMPLE 2 - Inner function uses variable passed into outer function as argument
// --------------------------

// what if getGreeter takes a parameter?
// function getGreeter(outerName) {
//   return function() {
//     console.log('Hi', outerName);
//   };
// }

// let greeter = getGreeter();
// greeter();

// --------------------------
// EXAMPLE 3 - Both the inner function and the outer function take parameters
// --------------------------

// what if both functions take parameters?
// function getGreeter(name1) {
//   return function(name2) {
//     console.log('Hi ' + name1 + ', meet ' + name2);
//   };
// }

// let greeter = getGreeter('Marie');
// greeter('Rosalind');

// --------------------------
// EXAMPLE 4 - Put it all together
// --------------------------
// function getGreeter(name1) {
//   return function(name2) {
//     console.log('Hi ' + name1 + ', meet ' + name2);
//   };
// }

// let introduceMarieTo = getGreeter('Marie');
// let introduceRosalindTo = getGreeter('Rosalind');

// introduceMarieTo('Dorothy');
// introduceMarieTo('Albert');

// introduceRosalindTo('Barbara');
// introduceRosalindTo('Isaac');
