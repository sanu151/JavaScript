// some and every method

let transaction = [1000, -3000, 2000, 4000, -899, 1200];

// some method
let resultSome = transaction.some((n) => {
  return n < 0;
});

console.log(resultSome); // true

// every method
let resultEvery = transaction.every((n) => {
  return n < 0;
});

console.log(resultEvery); // false
