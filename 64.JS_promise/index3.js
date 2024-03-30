// Nested function to promise

const taskOne = () => {
    return new Promise((resolved, reject) => resolved('Task 1 completed.')) ;
}

const taskTwo = () => {
    return new Promise((resolved, reject) => setTimeout(() => resolved('Task 2 completed.'),3000));
}

const taskThree = () => {
    return new Promise((resolved, reject) => resolved('Task 3 completed.'));
}

const taskFour = () => {
    return new Promise((resolved, reject) => resolved('Task 4 completed.'));
}

const taskFive = () => {
    return new Promise((resolved, reject) => resolved('Task 5 completed.'));
}

taskOne()
.then(res => console.log(res))
.then(taskTwo)
.then(res => console.log(res))
.then(taskThree)
.then(res => console.log(res))
.then(taskFour)
.then(res => console.log(res))
.then(taskFive)
.then(res => console.log(res));