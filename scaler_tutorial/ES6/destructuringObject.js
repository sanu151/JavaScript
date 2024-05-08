// Destructuring Object

let person = {
  fullName: "Supriyo Das",
  age: 36,
  gender: "male",
  address: {
    country: "India",
    state: "West Bengal",
    district: "Hooghly",
    city: "Chuchura",
  },
};

let {
  fullName,
  age,
  gender,
  address: { country, state, district, city },
} = person;

console.log(`My name is ${fullName}, I am ${age} years old.
As I am a ${gender}, I'm looking for my life-partner, who must be from ${country}.
I'm from a nice city named ${city}, it belongs to ${district}-${state}. `);
