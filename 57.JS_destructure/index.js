// Destructure Array, Object and function parameter

// Destructure Array
let numberArray = [10, 20, 30, 40];
let [n1, n2, n3, n4] = numberArray;
console.log(n1);
console.log(n2);

// Swipe Data
let a = 10;
let b = 20;

[a, b] = [b, a];

console.log(`a = ${a}, b = ${b}`);

// Destructure Object
let student = {
    id : 101,
    fullName : 'Supriyo Das',
    gpa : 3.53
}

const {id, fullName, gpa} = student;

console.log(id);
console.log(fullName);

//Destructure Function parameter
const studentData = ({roll, studentName, cgpa}) => {
    console.log(`${roll} , ${studentName}, ${cgpa}`);
}

const students = {
    roll : 1,
    studentName : 'Rupa Das',
    cgpa : 3.44
}

studentData(students);