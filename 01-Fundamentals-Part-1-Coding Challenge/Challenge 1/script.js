let weightMark = 78
let heightMark = 1.69
let bmiMark = weightMark / (heightMark * heightMark)

let weightJohn = 92
let heightJohn = 1.95
let bmiJohn = weightJohn / (heightJohn * heightJohn)

let markHigherBMI = bmiMark > bmiJohn

console.log(markHigherBMI);

weightMark = 95
heightMark = 1.88
bmiMark = weightMark / (heightMark * heightMark)

weightJohn = 85
heightJohn = 1.76
bmiJohn = weightJohn / (heightJohn * heightJohn)

markHigherBMI = bmiMark > bmiJohn; 
console.log(markHigherBMI);