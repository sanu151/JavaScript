// Callback Function

const even = (n) => n % 2 === 0;

const printEven = (even, num) => {
  let isEven = even(num);

  console.log(`The number ${num} is an Even number ${isEven}`);
};

printEven(even, 15);
