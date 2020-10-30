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