// forEach loop

let numbers = [10, 20, 30, 40];
let squreNumbers = [];

numbers.forEach((x)=>{
    console.log(x);
})

numbers.forEach((x) => {
    squreNumbers.push(x*x);
})

console.log(squreNumbers);

numbers.forEach((x, index, arr) => {
    arr[index] = x+5;
})

console.log(numbers);

