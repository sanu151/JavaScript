// ES7 async await

const taskOne = () => new Promise((resolve, rejected) => resolve('Task 1 completed'));
const taskTwo = () => new Promise((resolve, rejected) => setTimeout(() => resolve('Task 2 completed'),3000));
const taskThree = () => new Promise((resolve, rejected) => rejected('Task 3 not completed'));
const taskFour = () => new Promise((resolve, rejected) => resolve('Task 4 completed'));
const taskFive = () => new Promise((resolve, rejected) => resolve('Task 5 completed'));

const executeAll = async () => {
    try {
        const t1 = await taskOne();
        console.log(t1);
        const t2 = await taskTwo();
        console.log(t2);
        const t3 = await taskThree();
        console.log(t3);
        const t4 = await taskFour();
        console.log(t4);
        const t5 = await taskFive();
        console.log(t5);
    } catch (error) {
        console.log(error)
    }
}

executeAll();