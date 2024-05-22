let myObj = {};

console.log(myObj);

let person = {
  name: "Supriyo Das",
  age: 36,
};

console.log(person.hasOwnProperty("name"));

function person1(name, age) {
  this.name = name;
  this.age = age;
}

let person2 = new person1("Rupa Das", 27);

console.log(person2);
