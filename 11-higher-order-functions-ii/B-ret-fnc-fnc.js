/* in the previous unit, we learned that functions are like any other value in JS */

/* so if functions can return values, and functions are values… */

/* …functions can return other functions! */

// function greetMe() {
//   console.log('Hi!');
// }

// function getGreeter() {
//   return greetMe; // note: we're returning the function without calling it
// }

// let greeter = getGreeter();

// console.log(typeof greeter);
// console.log(greeter);
// greeter();

// --------------------------
// EXAMPLE 2 - Invoking the function inside the other function
// --------------------------

// function greetMe() {
//   console.log('Hi!');
//   return 5;
// }

// function getGreeter() {
//   return greetMe(); // what if we did invoke it?
// }

// let greeter = getGreeter();

// console.log(typeof greeter);
// console.log(greeter);

// console.log();
// console.log('Testing the output of greeter():');
// console.log('--------------------');
// greeter(); // what is the expected result here?

// --------------------------
// EXAMPLE 3 - Declaring a function inside the other function and returning it
// --------------------------

// function getGreeter() {
//   // we can declare a new inner function and then return it
//   function greetMe() {
//     console.log('Hi!');
//   }

//   return greetMe;
// }

// let greeter = getGreeter();
// greeter();

// --------------------------
// EXAMPLE 4 - Declaring an anonymous function inside the other function and returning it
// --------------------------

// function getGreeter() {
//   // we can return anonymous functions, too

//   return function(){
//     console.log('Hi!');
//   };
// }

// let greeter = getGreeter();
// greeter();

// --------------------------
// EXAMPLE 5 - Declaring a function that takes a parameter inside the other function and returning it
// --------------------------

function getGreeter() {
  // what if our returned function takes a parameter?

  return function(name) {
    console.log('Hi', name);
  };
}

let greeter = getGreeter();

greeter('Marie');
greeter('Rosalind');
greeter();
