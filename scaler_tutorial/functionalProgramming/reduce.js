// Some of every element in an Array

let arr = [1, 2, 3, 4, 10];

let sumArr = arr.reduce((acc, value) => {
  // accumulator, value
  let result = acc + value;
  return result;
}, 0); // Initial accumulator = 0;

console.log(sumArr); // 20
