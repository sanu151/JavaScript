//findIndex returns the index of first element of an array that satisfy the condition

let transaction = [1000, 3000, 2000, -898, -1200, 4000, -3600];

let firstTransnsactionIndex = transaction.findIndex((n) => {
  return n < 0;
});

console.log(firstTransnsactionIndex);
