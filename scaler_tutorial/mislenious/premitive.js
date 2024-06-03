// Premitive dataType
let firstPerson = "Supriyo";

let secondPerson = firstPerson;

firstPerson = "Rupa";

console.log(firstPerson);
console.log(secondPerson);

// Reference dataType
let person1 = {
  name: "Supriyo",
  age: 23,
};

let person2 = person1;

person2.name = "Rupa";

console.log(person1);
console.log(person2);
