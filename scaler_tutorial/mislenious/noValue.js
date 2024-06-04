// null vs undefined vs not defined

// undefined
let a;
console.log(a); // undefined

let arr = [1, 2, , 4];
console.log(arr[2]); //undefined

function sum(a, b) {
  let c = a + b;
}
console.log(sum(2, 3)); // undefined

// null
let myLife = null;
console.log(myLife); // null

// not defined (error)
console.log(b);
