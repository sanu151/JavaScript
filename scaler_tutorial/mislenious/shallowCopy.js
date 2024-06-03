// Shallow Copy -> Spread Operator(...)

let firstPerson = {
  name: "Supriyo Das",
  age: 35,

  address: {
    city: "Bandel",
    state: "WB",
  },
};

let secondPerson = { ...firstPerson };
secondPerson.address = { ...firstPerson.address };

secondPerson.name = "Rupa Das";
secondPerson.address.city = "Siddheswary";

console.log(firstPerson);
console.log(secondPerson);
