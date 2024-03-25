// Display a message using arrow function

const display = () => console.log("Hi I am message 1"); // for 1 line function no need to use {}

display();

// Return from arrw function

let sum = (num1, num2) => num1 + num2; // if not using {} return keyword not required.
let sum1 = (num1, num2) => {
    return num1 + num2; // if {} used return keyword must required
}

console.log(sum(20, 30));
console.log(sum1(30, 40));