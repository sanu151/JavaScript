// Chaining Method
let arr = [
  { name: "A", age: 13, gender: "M" },
  { name: "B", age: 34, gender: "F" },
  { name: "C", age: 17, gender: "M" },
  { name: "D", age: 22, gender: "F" },
  { name: "E", age: 42, gender: "M" },
  { name: "F", age: 14, gender: "M" },
  { name: "G", age: 28, gender: "F" },
  { name: "H", age: 16, gender: "F" },
];

// Ages of all the Man(Male)
// Chaining map method after filter method.
let ageOfMales = arr
  .filter((obj) => {
    return obj.gender == "M";
  })
  .map((male) => {
    return male.age;
  });

console.log(ageOfMales);
