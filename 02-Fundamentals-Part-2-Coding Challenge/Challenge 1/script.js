
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3
let dolphinsAvgScore = calcAverage(44, 23, 71)
let koalasAvgScore = calcAverage(65, 54, 49)

console.log(dolphinsAvgScore, koalasAvgScore);

const checkWinner = function(avgDolhins, avgKoalas) {
  const isKoalaWinner = avgKoalas >= (avgDolhins * 2);
  const isDolphinWinner = avgDolhins >= (avgKoalas * 2);
  if(isKoalaWinner) {
    return `Koalas win (${avgKoalas} vs. ${avgDolhins})`;
  } else if (isDolphinWinner) {
    return `Dolphin win (${avgDolhins} vs. ${avgKoalas})`;
  } else {
      return `No Team has won`
  }
}

console.log(checkWinner(dolphinsAvgScore, koalasAvgScore))

dolphinsAvgScore = calcAverage(85, 54, 41)
koalasAvgScore = calcAverage(23, 34, 27)
console.log(checkWinner(dolphinsAvgScore, koalasAvgScore));