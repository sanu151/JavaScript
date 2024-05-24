// Call Apply and Bind Method

let personDetails = function (city, a, occupation) {
  console.log(
    `Hi, I am ${this.firstName} ${this.lastName}. I am ${this.age} years old. I am from ${city}. I am ${a} ${occupation}`
  );
};

let perosn1 = {
  firstName: "Supriyo",
  lastName: "Das",
  age: 36,
};

let person2 = {
  firstName: "Rupa",
  lastName: "Das",
  age: 27,
};

let person3 = {
  firstName: "Rishika",
  lastName: "Das",
  age: 6,
};

// call Method
personDetails.call(perosn1, "Bandel", "an", "Engineer");

// apply Method
personDetails.apply(person2, ["Siddheswari", "a", "Home maker"]); // parameter will be pass as an arry in apply method

// bind Method
let myData = personDetails.bind(person3, "Bandel", "a", "Student"); // bind method used for store a function
myData();
