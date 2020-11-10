'use strict';
let hasDriversLicense = false;
const passTest = true;

/*
  strict mode does not allow a variable be declared without let/const/var
if(passTest) hasDriverLicense = true
if(hasDriversLicense) console.log("I can drive: D");

keywords are not allowed to be used a variable name

//const interface = 'Audio';
//const private = 534

*/

// Function 
function logger() {
  console.log("My name is Jonas");
}

// invoking /running /calling the function
logger()
logger()
logger()

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice
}

const appleJuice = fruitProcessor(5, 0)
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4)
console.log(appleOrangeJuice);

// function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear
}

const age1 = calcAge1(1991)

// function expression
const calcAge2 = function(birthYear) {
  return 2037 - birthYear
}

const age2 = calcAge2(1991)

console.log(age1, age2);

// Arrow function 
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991)
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear
  const retirement = 65 - age
  // return retirement
  return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1991, 'Joy'));
console.log(yearsUntilRetirement(1980, 'Bob'));

// function calling other function

function cutFruitPieces(fruit) {
  return fruit * 4
}

function foodProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples)
  const orangePieces = cutFruitPieces(oranges)
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`
  return juice
}

console.log(foodProcessor(2, 3));

// Example
const calcAge = function(birthYear) {
  return 2037 - birthYear
}

const yearsTilRetirement = (birthYear, firstName) => {
  const age = calcAge(birthYear)
  const retirement = 65 - age
  if(retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement
    // anything after the return keyword will not be executed. The return statement immediately returns the function
  } else {
    return -1
  }
}

console.log(yearsTilRetirement(1991, 'Jonas'));
console.log(yearsTilRetirement(1970, 'Mike'));

// Arrays

const friend1 = 'Michael';
const freind2 = 'Steven';
const friend3 = 'Peter';

// Array creation
const friends = ['Michael', 'Steven', 'Peter']
console.log(friends);

// Array creation 2nd method
const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

//  Arrays are 0 based(index's starting value)
console.log(friends[0]);
console.log(friends[1]);


// .length property to find out the number of elements in the array
console.log(friends.length);


// extract the last element in the array
console.log(friends[friends.length - 1]);
// JS expects an expression inside the []

// mutating the array by assigning an element in the given index
friends[2] = 'Jay'
console.log(friends);
// NOT POSSIBLE  friends = [‘Bob’, ‘John’, ‘Joe’];


// Javascript arrays can hold all sorts of values
const firstNm = 'Jonas'
const jonas = [firstNm, 'Schmedtman', 2037 - 1991, 'teacher', friends]
console.log(jonas);
console.log(jonas.length);


// Exercise
function calcAgeJonas(birthYear) {
  return 2037 - birthYear
}

const yrs = new Array(1991, 1984, 2008, 2020);

console.log(calcAgeJonas(yrs));  //NaN

console.log((years + 10));  // array of number + 10
//will convert the whole array to a string with comma seperated value and then concatenate 10

console.log((years - 10)); // array of numbers - 10 => NaN

const age4 = calcAgeJonas(yrs[0])
const age5 = calcAgeJonas(yrs[1])
const age6 = calcAgeJonas(yrs[years[years.length - 1]])
console.log(age4, age5, age6);

const ages = [calcAgeJonas(yrs[0]), calcAgeJonas(yrs[1]), calcAgeJonas(yrs[years[years.length - 1]])]

// Basic Array Method

const frnds = ['Michael', 'Steven', 'Peter']

// Adds element

/// push() adds an element at the end of the array
const newLength = frnds.push('Jay') 
console.log(frnds);  // ['Micheal', 'Steven', 'Peter', 'Jay']
console.log(newLength); // returns  the length: 4

// unshift() to add an element at the beginning of the array and returns the length of the new array
const length = frnds.unshift('John');
console.log(frnds); // ['John', 'Micheal', 'Steven', 'Peter', 'Jay']
console.log(length); // returns the length: 5

// Removes element

// pop()  will remove the last element of the array and will return the new element, not the length
const popped = frnds.pop()
console.log(frnds); //  ['John', 'Micheal', 'Steven', 'Peter']
console.log(popped); // 'Jay'

// shift() removes the first elemet from array and returns the element
const shifted = frnds.shift()
console.log(frnds); // ['Micheal', 'Steven', 'Peter']
console.log(shifted); // 'John'


// Searching for an element in an Array

// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
console.log(frnds.indexOf('Stevens'));  // 1
console.log(frnds.indexOf('Bob'));  // -1

//The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
console.log(frnds.includes('Steven'));  // true
console.log(frnds.includes('Bob'));     // false

// includes method can also be used with if ... else statement

if(frnds.includes('Peter')) {
  console.log("You have a friend named 'Peter'");
}
