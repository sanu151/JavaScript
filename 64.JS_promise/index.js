// Promise -> resolved or rejcected -> then, catch, finally

// Create a Promise -> pending, resolved, or released.
let promise1 = new Promise((resolve, rejected) => {
    let myCondition = true;
    if(myCondition){
        resolve('Complete Promise 1');
    } else {
        rejected('Task Failed');
    }
});

let promise2 = new Promise((resolve, rejected) => {
    resolve('Completed Promise 2')
})

promise1
.then((res) => console.log(res))
.catch((rej) => console.log(rej));

promise2
.then((res) => console.log(res));

