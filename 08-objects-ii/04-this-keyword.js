/**
 * HOW TO REFERENCE AN OBJECT WITHIN ITSELF
 * Way 1 (not the best)
 */


 /**
  * this object has a lot of the values hard coded in, which means that as the pusheen
  * object changes the methods don't reflect that change
  */
// let pusheen = {
//   name: 'Pusheen',
//   age: 7,
//   color: 'gray and tabby',
//   isHappy: true,
//   greet: function(name){
//     console.log(`Hello ${name}, I am Pusheen the gray and tabby cat. I am 7.`);
//     // console.log("Hello " + name + " , I am Pusheen the gray and tabby cat. I am 7.");

//   },
//   birthYear: function(currentYear){
//     return currentYear - 7;
//   }
// };


// pusheen.greet("Liz");
// pusheen.greet("Paige");

// pusheen.age++;
// pusheen.age++;
// pusheen.name = "Pusheen the Great"

// // console.log(JSON.stringify(pusheen, null, 2))
// console.log(pusheen)
// pusheen.greet("Liz");
// pusheen.greet("Paige");

/**
* Here we don't hard code values, methods are more dynamic but typing out
* `pusheenTheThird` each time get very repetitive
*/
// let pusheenTheThird = {
//   name: 'Pusheen',
//   age: 7,
//   color: 'gray and tabby',
//   isHappy: true,
//   greet: function(name){
//     console.log(`Hello ${name}, I am ${pusheenTheThird.name} the ${pusheenTheThird.color} cat. I am ${pusheenTheThird.age}.`);
//     // console.log("Hello " + name + " , I am Pusheen the gray and tabby cat. I am 7.");

//   },
//   birthYear: function(currentYear){
//     return currentYear - 7;
//   }
// };

// pusheen.greet("Liz");
// pusheen.greet("Paige");

// pusheen.age++;
// pusheen.age++;
// pusheen.name = "Pusheen the Great"

// console.log(JSON.stringify(pusheen, null, 2));
// console.log(pusheen);
// pusheen.greet("Liz");
// pusheen.greet("Paige");


/**
* Introducing the `this` keyword!
*/
// const name = 'Sulamita'

// let pusheen = {
//   name: 'Pusheen',
//   age: 7,
//   color: 'gray and tabby',
//   isHappy: true,
//   greet: function(name){
//     console.log(`Hello ${name}, I am ${this.name} the ${this.color} cat. I am ${this.age}`);
//     // console.log("Hello " + name + " I am " + this.name + " the " + this.color + " cat. I am " + this.age + ".");
//   },
//   birthYear: function(currentYear){
//     return currentYear - this.age; // 2019 - 7 = 2012
//   },
// // PLEASE BE AWARE THAT YOU SHOULDNT USE THE `THIS` KEYWQRD WITH ARROW FUNCTIONS
//   arrowMethod: (name) => {
//     // this != pusheen;
//     console.log(`Hello ${name}, I am ${this.name} the ${this.color} cat. I am ${this.age}`);
//     // console.log("Hello " + name + " I am " + this.name + " the " + this.color + " cat. I am " + this.age);
//   },
//   getThis: function() {
//     return this;
//   }

// };

// pusheen.age += 10;
// pusheen.greet("Pond");
// console.log(pusheen.age)
// console.log(pusheen.birthYear(2019));
// pusheen.arrowMethod("Christine");

/*

this keyword - what is it exactly? 

*/


// let pusheen = {
//   name: 'Pusheen',
//   age: 7,
//   color: 'gray and tabby',
//   level: 1,
//   isHappy: true,
//   greet: function(name){
//     console.log(`Hello ${name}, I am ${this.name} the ${this.color} cat.`);
//   },
//   birthYear: function(currentYear){
//     // how can we change this method??
//     return currentYear - this.age;
//   },
//   getThis: function(){
//     // pusheen
//     return this;
//   }
// };

// const a = { a: 1 };
// const b = { a: 1 };
// console.log(a === b);
// console.log(a == b);

// console.log(a === a);

// let returnedObject = pusheen.getThis();
// // // console.log(returnedObject.name);
// returnedObject.name = "Sir Pusheen";

// console.log(pusheen);

// pusheen.levelUp = function(levels = 1){
//   // 10 
//   this.level += levels;
//   if (this.level > 30){
//     this.name = "The best of all time"
//   }

//   if (this.level < 20){
//     this.name = "Pusheen"
//   }
//   return this.level;
// };

// console.log(pusheen)
// pusheen.levelUp(10)
// console.log(pusheen)
// pusheen.levelUp(20)
// console.log(pusheen)
// console.log(returnedObject === pusheen);

// const pip = {
//   name: 'Pip',
//   age: 5,
//   color: 'Orange',
//   species: 'Cat'
// }

// const mrBear = {
//   name: 'Mr Bear',
//   color: 'brown',
//   age: 2,
//   species: 'Bear',
//   salute: function(name){
//     console.log(`Hello ${name}, I am ${this.name} the ${this.color} ${this.species}.`);
//   },
// }

// mrBear.salute('Karolina');
// pip.sayHi = mrBear.salute;
// // pip.sayHi = function(name){
// //  this => pip
// //   console.log(`Hello ${name}, I am ${this.name} the ${this.color} ${this.species}.`);
// // };
// // pip.name = "Pip the little guy"
// pip.sayHi("Sara")



