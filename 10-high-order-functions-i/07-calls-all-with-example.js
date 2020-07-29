/*
  https://goo.gl/1H5LhL
  https://goo.gl/qjSqGV
  https://goo.gl/c84i4E

  hoisting
*/

function callAllWith(arr, callbackFunc) {
  for(let i = 0; i < arr.length; i++) {
    callbackFunc(arr[i]);
  };
};
// let group = ["Jane", "Jill", "Pip", "Mike"];


// function sayByeWithName(name) {
//   console.log("Bye, " + name + "!");
// };

// callAllWith(group, sayHelloWithName);
// callAllWith(group, sayByeWithName);

// function sayHelloWithName(name) {
//   console.log("Hello, " + name + "!");
// };

// const pets = ['Mr Bear', 'Pusheen', 'Sookie', 'Winkie'];
// function petThePet(petName){
//   console.log(`Pet ${petName}`);
// }
// // pet all the pets
// callAllWith(pets, petThePet);
// // say hi to all the pets
// callAllWith(pets, sayHelloWithName);

// function petLovesToJump(petName){
//   console.log(`${petName} loves to jump`);
// };
// function petLovesToEat(petName){
//   console.log(`${petName} loves to eat`);
// };

// callAllWith(pets, petLovesToJump);

/* we can pass anonymous functions into another function, too */

// function callAllWith(names, sayWithNameFunc) {
//   for (let i = 0; i < names.length; i++) {
//     sayWithNameFunc(names[i]);
//   }
// }
// const group = ['Mr Bear', 'Pusheen', 'Sookie', 'Winkie'];

// let group = ["Jane", "Jill", "Pip", "Mike"];

// callAllWith(group, function (name) {
//   console.log("Bye, " + name + "!");
// });

// callAllWith(pets, function(name){
//   console.log(`${name} loves to jump.`);
// });

// callAllWith(group, (name) => {
//   console.log(`${name} loves to jump.`);
// });

//


// high order
// callback 

function callAllWith(arr, callbackFunc) {
  for (let i = 0; i < arr.length; i++) {
    const elem = arr[i];
    callbackFunc(elem);
  }
}
