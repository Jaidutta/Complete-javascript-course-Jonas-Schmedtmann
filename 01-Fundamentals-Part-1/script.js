let js = "amazing"
if (js === "amazing") alert('Javascript is FUN!')
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23)

let name = 'Jonas'
console.log(name);
console.log(name);
console.log(name);

// variable naming conventions
let jonas_matilda = "JM"
let $function = 27;

let person = "jonas"
let PI = 3.1415;

let myFirstJob = 'Programmer'
let myCurrentJob = 'Teacher'

let job1 = 'programmer'
let job2 = 'teacher'

let javascriptIsFun = true
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptisFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptIsFun = 'YES'
console.log(typeof java);

let year
console.log(typeof year);

year = 1991;
console.log(typeof year);

// JS declaration
let age = 30;
age = 31

const birthYear = 1990
// birthYear = 1991

//const job 

var job = 'Programmer'
job = 'Teacher'

lastName = 'Schmedtmann'

// Math Operators
const now = 2037
const ageJonas = now -1991;
console.log(ageJonas);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 * 2 * 2 = 8

const ageSarah = now - 2018
console.log(ageJonas, ageSarah);

const myFirstName = 'Joy'
const myLastName = 'Dutta'

console.log(myFirstName +  ' ' + myLastName);

// Assignment Operators
let x = 10 + 5; // 15
x += 10 // x = x + 10 => 15 + 10
x *= 4
x++
x--
console.log(x);

// Comparison Operators: The result of comparison operators should be boolean
// >, <, >=, <=
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(isFullAge);

console.log(now - 1990 > now - 2020);

// Operator precedence
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

let a, b;

a = b = 25 - 10 - 5;

console.log(a, b);

const avgAge = (ageJonas + ageSarah) / 2;
console.log(avgAge);

const firstName = 'Jonas';
const myJob = 'teacher';
const myBirthYear= 1991
const currentYear = 2037
const jonas = "I'm " + firstName + ', a '  + (currentYear - myBirthYear) + ' years old ' + myJob + '!'

console.log(jonas);

// ES6 Template literals
const jonasNew = `I'm ${firstName}, a ${currentYear - myBirthYear} years old ${myJob}!`

console.log(jonasNew);

console.log(`Just a regular string`);

console.log('String with \n\
multiple \n\
lines');

// Alternative
console.log(`String with
mulitple
lines`);

// Taking decision with if/else

const yourAge = 19
const isOldEnough = yourAge >= 18 

if(isOldEnough) {
  console.log(`Sarah can now apply for a driving license`);
}


// Example 2
const myAge = 15
if(myAge >= 18) {
  console.log(`You can now apply for a driving license`);
} else {
  const yearsLeft = 18 - myAge
  console.log(`Sorry, you will have to wait ${yearsLeft} years to get the driving license`);
}

let century
const yearOfBirth = 1991
if(yearOfBirth <= 2000) {
  century = 20
} else {
  century = 21
}

// Type Conversion and Concatenation

// Type Conversion
const inputYear = '1991'
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);  // string concatenation implicit conversion
console.log(Number(inputYear) + 18);  // explicit conversion
console.log(typeof NaN);

console.log(String(23), 23);

// Type Coersion
console.log('I am ' + 23 + ' years old'); 
console.log('I am ' + '23' + ' years old');

// with minus, string is converted to Number
console.log('23' - '10' - 3); 

//with multiplication, strings are converted into Number
console.log('23' * '2'); // 

// with division, the string is converted to Number
console.log('23' / '2');

// with logical operator, the string is converted to Number
console.log('23' > '2');

let n = '1' + 1; // '11'
n = n - 1;  // 10
console.log(n);

// Truthy and Falsy Values

// 5 Falsy values in JS: 0 , ‘’, undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

/*
When does JS do type coercion to Boolean?
	It happens in 2 scenarios:
    In a logical context: in the condition of an if ... else statement
*/

// Type coersion to Boolean

const money = 0;

if(money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job");
}

let height;

if(height) {
  console.log("YAY!, Height is defined");
} else {
  console.log("Height is UNDEFINED");
}

// Equality operator
console.log(18 === 18);
console.log(18 === 19);
console.log('18' == 18); // == performs type coersion and converts '18' to 18
console.log('18' === 18); // ===  DOES NOT perform type coersion and Check both the type and the value

const ageJoy = 18;

if(ageJoy === 18) console.log("You just become an adult :D (strict)");

if(ageJoy == 18) console.log("You just become an adult :D (loose)");

// user input from a website
const favouriteNumber = Number(prompt("What is your favourite number?"))
if(favouriteNumber == 23) {
  console.log("Cool! 23 is an amazing number!");
}

if(favouriteNumber === 23) {
  console.log("Cool! 23 is an amazing number!");
}


// if else if ... else
if(favouriteNumber === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if(favouriteNumber === 7) {
  console.log("Cool! 7 is also an amazing number!");
} else if(favouriteNumber === 9) {
  console.log("Cool! 9 is also an amazing number!");
} else {
  console.log("The number is NOT 23 or 7 or 9");
}

// !== strict not equal operator
if(favouriteNumber!== 23) console.log("Why not 23?");

// Logical Operators

const hasDriversLicense = true
const hasGoodVision = false
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision

if(shouldDrive) {
  console.log("Sarah is able to drive");
} else {
  console.log("Someone else should drive...");
}

if(hasDriversLicense && hasGoodVision) {
  console.log("Sarah is Okay to drive");
} else {
  console.log("Someone else must drive...");
}

const isTired = true;

console.log(hasDriversLicense || hasGoodVision || isTired);
console.log(hasDriversLicense && hasGoodVision && isTired);

if(hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is Okay to drive");
} else {
  console.log("Someone else must drive...");
}