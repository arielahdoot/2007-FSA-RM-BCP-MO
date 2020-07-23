/* 

  objects can store any type of value, including arrays and other objects 

*/


let pusheen = {
  name: 'Pusheen',
  age: 7,
  colors: ['gray', 'tabby']
};

console.log(pusheen.colors);
// console.log(pusheen.colors[0]);
// pusheen.colors.push('silver');
// console.log(pusheen);

const pusheenColors = pusheen.colors;
// // console.log(pusheenColors[1]);
pusheenColors.push('silver');
console.log(pusheenColors);
// let age = pusheen.age;
// age = 45;
// console.log(age);

console.log(pusheen);


const pusheenColors = pusheen.colors.slice();
// pusheenColors.push('black');

// console.log(pusheenColors);
// console.log(pusheen);
