/* objects can store any type of value, including arrays and other objects */


let pusheen = {
  name: 'Pusheen',
  age: 7,
  siblings: {
    sister: 'Stormy',
    brother: 'Pip'
  }
};


// console.log(pusheen.siblings.sister);
// console.log(pusheen.siblings.brother);
// console.log(pusheen['siblings']['sister'])
// console.log(pusheen)
// console.log(JSON.stringify(pusheen, null, 2))

// const siblingToLookFor = "brother";

// console.log(pusheen["siblings"][siblingToLookFor]);
// console.log(pusheen.siblings[siblingToLookFor])

const siblings = Object.assign({}, pusheen.siblings);

siblings.lilBrother = 'Tom'

console.log(siblings)

// pusheen.siblings.sister = {
//   name: 'Stormy',
//   age: 2
// };
console.log(JSON.stringify(pusheen, null, 2))
// console.log(pusheen)
// console.log(pusheen.siblings.sister.name);

// pusheen.siblings.brother = {
//   name: 'Pip',
//   age: 5
// }


// console.log(pusheen);
// take this object and format
// console.log(JSON.stringify(pusheen, null, 4));

// const pusheenSister = pusheen.siblings.sister;
// console.log(JSON.stringify(pusheenSister, null, 2))
// console.log(pusheen.siblings.sister.name);
// console.log(pusheen.siblings.brother.name);
// const siblingToLookFor = 'sister';
// console.log(pusheen.siblings[siblingToLookFor].name);
// console.log(pusheen.siblings[siblingToLookFor]["name"]);



// pusheen.siblings.lilSister = "Mary";
// console.log(pusheen);

// console.log(JSON.stringify(pusheen, null, 2))
// mySiblings.lilSister = 'Mary';

// console.log(pusheen.siblings);