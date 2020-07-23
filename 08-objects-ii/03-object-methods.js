/* 
  methods on an object generally should perform an action that's relevant to the idea or concept represented by the object itself
*/


// let pusheen = {
//   name: 'Pusheen',
//   age: 7,
//   color: 'gray and tabby',
//   isHappy: true,
//   greet: function(){
//     console.log("Hello I am Pusheen the cat.");
//   },
// };

// To avoid overriding it use this:
// Object.freeze(pusheen);

// pusheen.greet = function () {
//   console.log('I AM PUSHHEEN')
// }
// pusheen.greet();


/* 
  other methods
*/


let pusheen = {
  name: 'Pusheen',
  age: 7,
  color: 'gray and tabby',
  isHappy: true,
  greet: function(){
    console.log("Hello I am pusheen the cat.");
  },
  getBirthYear: function(currentYear){
    return currentYear - 7;
  },
  // if we don't get a value, fallback to Sam
  personalGreet: function(name = 'Sam') {
    // if (name === undefined) {
    //   name = 'Sam'
    // }
    console.log(`Hello ${name}! I am Pusheen.`);
  },

  sayAge: function(){
    console.log("I am 7 years old.");
  }
};


// console.log(pusheen.getBirthYear(2020));
pusheen.personalGreet();


