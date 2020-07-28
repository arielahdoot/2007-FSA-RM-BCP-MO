// Passing primitive values into functions.

/* REMEMBER: when you assign a primitive value to a variable, the variable 'stores' a copy of that value */

/* might be beneficial to paste all the code from this file into http://pythontutor.com/javascript.html to see how the variables change and where scope plays a part */

let myNum = 10;
/*
myNum: 10
*/

function adds20(num) {
  // let num = myNum;
  num += 20;
  return num;
}

let returnedNum = adds20(myNum);
/*
myNum: 10
returnedNum: 30
// not showing the value of num because it only exists inside the scope of the function adds20()
*/

console.log(myNum);
console.log(returnedNum);

/* 
The following is a visualization of what happens specifically when we pass in the variable myNum (10) as an argument into the function adds20 (Note: I will not be showing the value of myNum or returnedNum during this visualization because we are currently inside the function's scope)
----------------------------------------------------
function adds20(num) {
  /*
  num: 10
  */

  // num += 20;
  /*
  num:30
  */

  //return num;
// }

/*
- Notice that the value of myNum has not changed at all since the beginning. Why is that?
- REMEMBER: when you assign a primitive value to a variable, the variable stores a copy of that value
- The moment we passed in myNum as an argument into the adds20 function, we assigned our parameter, num, to be equal to myNum, and because myNum is a primitive value, the variable num will store a COPY of the value stored in myNum, which in this case is 10.
- So all the changes that were made to num in the adds20 function call will only affect the copy of 10 stored in the num variable, and will not affect the 10 stored in the myNum variable at all. 
- This is why when you pass in primitive values as arguments into functions it’s called Pass By Value, because you’re passing in a copy of the value as an argument to the function.
*/

/*
Notes:
------

*/