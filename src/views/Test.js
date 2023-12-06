var totalMoney = function (n) {
  let sum = 0;
  let loopCount = 0;
  while (n) {
    let x = 1 + loopCount;
    while (n && x <= 7 + loopCount) {
      sum = sum + x;
      x++;
      n--;
    }
    loopCount++;
  }
  return sum;
};
console.log(totalMoney(20));
