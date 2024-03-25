// Spread Operator

let num1 = [1, 2, 3, 4];
let num2 = [5, 6, ...num1]; // Spread operator can use any place.

console.log(num2);

let num3 = [7, 8, 9, 0];

let num = [...num1, ...num3]; // Concadinate two arrys using spread operator
console.log(num);

let p1 = {
    name :  `Supriyo Das`,
    age : 36
}

let p2 = {
    nationality : `Indian`,
    occupation : `Mechanical Supervisor`
}

let p = {...p1, ...p2}
console.log(p);