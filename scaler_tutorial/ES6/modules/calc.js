// Create modules
const add = (a, b) => console.log(a + b);
const sub = (a, b) => console.log(a - b);
const mul = (a, b) => console.log(a * b);
const div = (a, b) => console.log(a / b);

// export modules
module.exports = {
  addition: add,
  subtruction: sub,
  multiplication: mul,
  divition: div,
};
