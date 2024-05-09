// We have given a number, check the squre of this number is odd or even.

let num = 6;

// Imperative way to writing code
const oddEven = (num) => {
  const sqr = num * num;
  if (sqr % 2 == 0) {
    console.log(`Squre Root of ${num} is ${sqr}, it is a Even number`);
  } else {
    console.log(`Squre Root of ${num} is ${sqr}, it is a Odd number`);
  }
};

oddEven(num);

// Declarative way to write code
const checkForSqure = (num) => ((num * num) % 2 === 0 ? "Even" : "Odd");
console.log(checkForSqure(num));
