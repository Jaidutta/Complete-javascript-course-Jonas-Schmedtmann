const markMiller = {
 firstName: 'Mark',
 lastName: 'Miller',
 fullName: `${this.firstName} ${this.lastName}`,
 weight: 78,
 height: 1.69,
 calcBMI: function() {
  this.BMI = this.weight / (this.height * this.height)
  return this.BMI
 }
}

const johnSmith = {
  firstName: 'John',
  lastName: 'Smith',
  fullName: `${this.firstName} ${this.lastName}`,
  weight: 92,
  height: 1.95,
  calcBMI: function() {
    this.BMI = this.weight / (this.height * this.height)
    return this.BMI
  }
}

const johnsBMI = johnSmith.calcBMI()
const marksBMI = markMiller.calcBMI()

console.log(johnSmith.firstName);
console.log(markMiller.firstName);
if(johnsBMI > marksBMI) {
  console.log(`${johnSmith.firstName}'s BMI (${johnSmith.calcBMI().toFixed(2)}) is higher than ${markMiller.firstName}'s (${markMiller.calcBMI().toFixed(2)})!`);
} else {
  console.log(`${markMiller.firstName}'s BMI (${markMiller.calcBMI().toFixed(2)}) is higher than ${johnSmith.firstName}'s (${johnSmith.calcBMI().toFixed(2)})!`)
}

