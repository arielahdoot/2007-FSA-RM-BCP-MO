/* 

use the for…in loop to loop through all of the keys in an object 

*/


let pusheen = {
  name: 'Pusheen',
  age: 7,
  color: 'gray and tabby'
};

// for (let key in pusheen) {
//   console.log("What is the key?? ", key);
// }

//1 :D
for (let key in pusheen) {
  const value = pusheen[key]; // pusheen @ color
  // grey and tabby
  // console.log("Pusheen's", key, 'is', pusheen[key]);
  console.log("Pusheen's", key, 'is', value);
}

//2 :(
for (let key in pusheen) {
  // key = name
  const value = pusheen.key; // pusheen @ key
  console.log("Pusheen's", key, 'is', value);
}



const students = [
  { name: 'Sam', money: 23 },
  { name: 'Samantha', money: 245 },
  { name: 'Sal', money: 2300 }
]

// let total = 0
// for (let i = 0; i < students.length; i++) {
//   const student = students[i];
//   total += student.money;
// }

