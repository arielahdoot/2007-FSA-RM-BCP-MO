// kebab-case [X NOPE]
const my-favourite-place = 'Fullstack';

// snake_case [ALSO NOPE]
const my_favourite_place = 'Fullstack';

// Here's the one WE use for defining variable names -> it's called camelCase
const myFavouritePlace = 'Fullstack';
// why? it’s what is most common

// capital letter variables are also not preferred
// you’ll use them for classes and other things

// don't use ambiguous variable names!
const x = 68;
// what even is `x` here? Minutes late?? Keys I’ve lost??

// use names that describe the value they contain
const desiredTemp = 68;

// when is it ok to use short variables?
// it's ok to use short variable names as counters, like i in a for loop
for (let i = 1; i <= 3; i++) {
  console.log(i);
}