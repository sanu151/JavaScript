// map function 

var numbers = [2, 3, 4, 5];

var squreNumbers = numbers.map((x) => {
    return Math.pow(x, 2);
})

console.log(squreNumbers);

// filter function

var num = [22, 25, 14, 3, 53, 2, 5, 28, 9];

var newNumbers = num.filter((x) => {
    return x > 15;
})

console.log(newNumbers);