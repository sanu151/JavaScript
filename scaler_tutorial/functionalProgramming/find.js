// find returns the first element of an array that satisfies the condition

const transaction = [1000, 3000, 4000, 2000, -898, 1200, -3600, -1500];

let firstWithdrawl = transaction.find((n) => {
  return n < 0;
});

console.log(firstWithdrawl);
