// Synchronous and Asynchronous Execution

// Synchronous Execution : Synchronous code execution happens in a sequential manner, one line at a time. 
//      Each line of code waits for the previous line to finish before it starts. 
//      This is similar to following a recipe in order – we have to complete step one before moving on to step two.
//      Synchronous Execution is default properties of JavaScript.

// Asynchronous Execution : Asynchronous code execution, on the other hand, doesn't block the main thread. 
//      This means the program can continue running other code while waiting 
//      for an asynchronous operation to complete. 
//      Asynchronous operations are typically used for tasks that take time,
//      such as fetching data from a server or waiting for user input.

let taskOne = () => console.log('Task 1'); // Synchronous Execution
let taskTwo = () => console.log('Task 2'); // Synchronous Execution
let taskThree = () => setTimeout(() => console.log('Task 3, Fatch Data from user or server'), 1000); // Asynchronous Execution
let taskFour = () => console.log('Task 4'); // Synchronous Execution
let taskFive = () => console.log('Task 5'); // Synchronous Execution

taskOne();
taskTwo();
taskThree();    // This function will execute at end, it's an Asynchronous Execution
taskFour();
taskFive();

