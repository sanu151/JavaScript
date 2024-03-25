// Return student name from student object array using arrow function


// Student Object Array
var student = [
    {
        id : 101,
        name : 'Supriyo Das',
        gpa : 3.45
    },
    {
        id : 102,
        name : 'Rupa Das',
        gpa : 2.53
    },
    {
        id : 103,
        name : 'Sunil Mondal',
        gpa : 3.11
    },
    {
        id : 104,
        name : 'Monoj Biswas',
        gpa : 2.93
    }
];

// Arrow function
const studentName =() => student.filter((x) => x.gpa > 3).map((y) => y.name);


// Itrate array from studentName function and print in console
studentName().forEach((x) => console.log(x));
