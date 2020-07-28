// Observed behavior of primitive values

/* strings are primitive values */
let britishCity = 'York';
let americanCity = britishCity;

americanCity = 'New ' + americanCity;

console.log(britishCity);
console.log(americanCity);

/*
Notes:
------

*/