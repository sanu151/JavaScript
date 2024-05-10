// Callback function

const printName = (firstName, lastName) => {
  firstName("Supriyo");
  lastName("Das");
};

const firstName = (fn) => {
  console.log(fn);
};

const lastName = (ln) => {
  console.log(ln);
};

printName(firstName, lastName); // Send functions (firstName and lastName) as arguments.
