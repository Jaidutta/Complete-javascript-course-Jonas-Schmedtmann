/*
const dolphinScore1 = 96;
const dolphinScore2 = 108;
const dolphinScore3 = 89;
const avgDolphinScore = (dolphinScore1 + dolphinScore2 + dolphinScore3) / 3

const koalasScore1 = 88;
const koalasScore2 = 91;
const koalasScore3 = 110;
const avgKoalaScore = (koalasScore1 + koalasScore2 + koalasScore3) / 3; 

console.log(avgDolphinScore, avgKoalaScore);

if(avgDolphinScore > avgKoalaScore) {
  console.log("Dolphin is the winner");
} else if (avgKoalaScore > avgDolphinScore) {
  console.log("KoalaScore is the winner");
} else {
  console.log("It is a draw");
}

*/

const dolphinScore1 = 97;
const dolphinScore2 = 112;
const dolphinScore3 = 101;

const koalasScore1 = 109;
const koalasScore2 = 95;
const koalasScore3 = 106;

const minimumScore = 100
const avgDolphinScore = (dolphinScore1 + dolphinScore2 + dolphinScore3)/ 3
const isValidDolphinScore = avgDolphinScore >= minimumScore


const avgKoalaScore = (koalasScore1 + koalasScore2 + koalasScore3) / 3
const isValidKoalasScore = avgKoalaScore >= minimumScore

if(isValidDolphinScore && (avgDolphinScore > avgKoalaScore)) {
  console.log("Dolphin is the winner");
} else if (isValidKoalasScore && (avgKoalaScore > avgDolphinScore)) {
  console.log("Koala is the winner");
}

if(isValidDolphinScore && (avgDolphinScore > avgKoalaScore)) {
  console.log("Dolphin is the winner");
} else if (isValidKoalasScore && (avgKoalaScore > avgDolphinScore)) {
  console.log("Koala is the winner");
} else if (isValidDolphinScore && isValidKoalasScore && (avgDolphinScore === avgKoalaScore)) {
  console.log("It is a draw");
} else {
  console.log("No one wins the trophy");
}