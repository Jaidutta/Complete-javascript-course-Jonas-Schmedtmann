let weightMark = 78
let heightMark = 1.69
let bmiMark = weightMark / (heightMark * heightMark)

let weightJohn = 92
let heightJohn = 1.95
let bmiJohn = weightJohn / (heightJohn * heightJohn)


console.log(bmiMark > bmiJohn);

if(bmiMark > bmiJohn) {
  console.log(`Mark's BMI is higher than John's!`);
} else {
  console.log(`John's BMI is higher than Mark's!`);
}

weightMark = 95
heightMark = 1.88
bmiMark = weightMark / (heightMark * heightMark)

weightJohn = 85
heightJohn = 1.76
bmiJohn = weightJohn / (heightJohn * heightJohn)


console.log(bmiMark > bmiJohn);

if(bmiMark > bmiJohn) {
  console.log(`Mark's BMI is higher than John's!`);
} else {
  console.log(`John's BMI is higher than Mark's!`);
}

if(bmiMark > bmiJohn) {
  console.log(`Mark's BMI(${bmiMark}) is higher than John's(${bmiJohn})!`);
} else {
  console.log(`John's BMI(${bmiJohn.toFixed(1)}) is higher than Mark's(${bmiMark.toFixed(1)})!`);
}

const inputYear = '1991'