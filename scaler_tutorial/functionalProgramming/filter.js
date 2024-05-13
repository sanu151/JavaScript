// filter method

let arr = [2, 5, 6, 8, 3, 12, 43, 25, 33, 22];

let evenArray = arr.filter((n) => {
  return n % 2 == 0;
});

console.log(evenArray);
