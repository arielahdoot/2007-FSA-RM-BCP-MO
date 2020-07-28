/* 

functions aren't special. we can push them into an array, too! 
https://goo.gl/372Pfk

*/
let amazingArray = [];

function happyFunction() {
  console.log('I am happy!');
}

function madFunction() {
  console.log('I am mad!');

}

function sadFunction(){
  console.log('I am sad!');

}
amazingArray.push(happyFunction);
amazingArray.push(madFunction);
amazingArray.push(sadFunction);
console.log(amazingArray);

// const elem = amazingArray[0];
// console.log(elem);
// elem();
// console.log(amazingArray[0])
// amazingArray[0]();

for (let i = 0; i< amazingArray.length; i++){
  const elem = amazingArray[i];
  elem();
}
