/*
Visualize a complex variable as follows:
-------------------------------
variable = labeled box
label = name of the variable
inside the box = address/reference to where the complex value is stored => complex value
*/

/*
Example:
--------
let array = [1,2];
array is the label of the box
5 is the address/reference to where the true contents of the box are stored
*/


// I will portray that example as follows:
// --------------------------------------
/*
array: 0x001 => [1,2]
*/

/*
So in our example, the box with label array contains an address 0x001 that references the array that we want. So in other words, if you were to look inside this box, it would tell you to go the address 0x001 in memory in order to find the array that you’re looking for.
*/

// The reason I chose a format like 0x001 to be the memory address is because hexadecimal digits are usually used to represent memory addresses in programs. 
// Don't worry about it if it looks bizarre, but hexadecimal is another base for representing numbers, like decimal (0-9, which is what we usually use), and binary (0s and 1s, which is what computers use under the hood). I am using this format to emphasize the difference between a value and a memory address. 