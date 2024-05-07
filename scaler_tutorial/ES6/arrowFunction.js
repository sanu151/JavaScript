// Arrow Function
let test1 = () => console.log("Hello World"); // One liner function, no need to use carly breses {}

let test2 = (b) => {
  // For one parameter (here is b) no need to add parenthesis ()
  let c = b * b;
  console.log(c);
};

let test3 = (a, b) => {
  let sum = a + b;
  return sum;
};

test1();

test2(4);

console.log(test3(2, 5));
