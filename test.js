function countChange(money, coins) {
  const sortedCoins = coins.sort().reverse();
  const smallestDenom = sortedCoins[coins.length];

  // go through sorted coins, subtracting each one from the total - if the result is then smaller than 0, skip to the next coin
  let currentTotal = money;
  let coinIndex = 0;
  const coinsResult = [];
  while (coinIndex <= sortedCoins.length) {
    console.log(currentTotal, coinIndex);
    if (currentTotal === 0 || coinIndex > sortedCoins.length - 1) {
      break;
    }
    const currentCoin = sortedCoins[coinIndex];
    if (currentTotal - currentCoin >= 0) {
      currentTotal -= currentCoin;
      coinsResult.push(currentCoin);
      continue;
    }
    if (currentTotal - currentCoin < 0) {
      coinIndex += 1;
    }
  }
  console.log(coinsResult);
}

console.log(countChange(2, [2, 1]));
