// Deep Copy using JSON

let firstPerson = {
  name: "Supriyo Das",
  age: 35,

  address: {
    city: "Bandel",
    state: "WB",
  },
};

let secondPerson = JSON.parse(JSON.stringify(firstPerson));

secondPerson.name = "Rupa Das";
secondPerson.address.city = "Siddheswary";

console.log(firstPerson);
console.log(secondPerson);
