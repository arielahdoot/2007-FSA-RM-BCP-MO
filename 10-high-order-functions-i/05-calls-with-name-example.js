/*
https://goo.gl/F6D3rA

*/
function saysHi(name) {
  console.log(`Hi ${name}!`);
}

function saysBye(name) {
  console.log(`Bye ${name}!`);
}

function callsWithName(name, otherFunction) {
  // saysBye('Sadie')
  otherFunction(name);
}

callsWithName('Sadie', saysHi);  // saysHi('Sadie')  // `Hi Sadie!`
callsWithName('Sadie', saysBye); // saysBye('Sadie')

