const bill = 275;
const tipPercentage = (bill >= 50 && bill <= 300) ? 0.15 : 0.20;
const tip = bill * tipPercentage
const total = bill + tip;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value
${total}`);
