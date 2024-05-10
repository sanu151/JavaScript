// Impure function

var a = 2;

const add = (x) => {
  // This function is dependent on external a value, If the a value changes result of this function is changed.
  console.log(a + x); // console.log use a external resource : console,
  a++;
};

console.log(`Impure Function result : `);
add(2);
add(2);
add(2); // The result is changes every time althow we given the same value as a parameter

//Pure function
const add1 = (b, y) => {
  return b + y; // this function is not dependent any external resources.
};

console.log(`Pure function result : `);
console.log(add1(3, 4));
console.log(add1(3, 4));
console.log(add1(3, 4));
