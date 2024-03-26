// Array methods find() , findIndex()

// Find first element from Array based on a condition
const arr = [3, 35, 32, 567, 22, 56];
const evenNumber = arr.find(x => x%2===0);
const evenNumberIndex = arr.findIndex(x => x%2===0);
console.log(evenNumber);
console.log(evenNumberIndex);

// Find first element from an Array Object based on a condition
const students = [
    {
        id : 101,
        gpa : 2.45
    },
    {
        id : 102,
        gpa : 3.75
    },
    {
        id : 103,
        gpa : 4.22
    },
    {
        id : 104,
        gpa : 4.39
    },
];

console.log(students.find(x => x.gpa > 4));