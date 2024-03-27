// Callback and Higher Order function with an Asynchronous Execution

const taskOne = callback => {
    console.log(`Task 1`);
    callback();
}

const taskTwo = callback => {
    setTimeout(() => {
        console.log(`Task 2`);
        callback();
    }, 3000);
}

const taskThree = callback => {
    console.log(`Task 3`);
    callback();
}

const taskFour = callback => {
    console.log(`Task 4`);
    callback()
}

const taskFive = () => console.log(`Task 5`);

taskOne(() => {
    taskTwo(() => {
        taskThree(() => {
            taskFour(() => {
                taskFive();
            });
        });
    });
});