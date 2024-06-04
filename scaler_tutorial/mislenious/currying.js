// Function Currying in JavaScript

let sumCurrying = (x) => {
  return (y) => {
    console.log(x + y);
  };
};

let sumTwoNumbers = sumCurrying(2);
sumTwoNumbers(3);
