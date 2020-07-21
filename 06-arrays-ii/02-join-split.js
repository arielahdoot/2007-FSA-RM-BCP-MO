/* 
  .join concatenates the elements of an array into a string; 
  the original array is not changed 
  @param separator {string} [optional]
  @returns joinedStr {string}
*/

// let names = ["Mr Bear", "Pusheen", "Planty", "Mr Sheep"];
// // join every element with a comma
// let joinedString = names.join(', ');
// console.log(names);
// console.log(typeof joinedString);
// console.log(joinedString);


// let names = ["Mr Bear", "Pusheen", "Planty", "Mr Sheep"];
// join every element with ' and '
// let joinedString = names.join(' and ');

// console.log(typeof joinedString);
// console.log(joinedString);


/* 
  Our own `.join` function
*/

// let names = ["Mr Bear", "Pusheen", "Planty", "Mr Sheep"];
// let joinedString = '';

// for(let i = 0; i < names.length; i++){
//   const name = names[i];
//   joinedString += name;
//   if (i !== names.length - 1){ // if this isn't the last element
//     joinedString += ' and '
//   }
// }

// console.log(joinedString);

/*

 join => from an array to a string
 split => from a string to an array

 */
/* 
  .split 
  divides the string by the seperator, puts those seperation into an  array
  This doesn't mutate the string
  @param separator {string}
  @returns separatedArr {array}
*/

// const myStr = "Mr.Bear and Pusheen and Planty and Mr.Sheep";

// const myArr = myStr.split(' and ')
// const myArr = myStr.split(' ')
// console.log(myStr);
// console.log(myArr);


let myStr = 'tacocat';
const myArr = myStr.split('');
console.log(myArr)

// this can't happen if it's a string
myArr[0] = 'L';
myArr[1] = 'o';

// myStr[0] = 'L';
// myStr[1] = 'o';

console.log(myArr);
const newStr = myArr.join('');
console.log(newStr);