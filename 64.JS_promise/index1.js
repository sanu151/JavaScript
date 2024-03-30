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

Promise.all([promise1, promise2])
.then((res1, res2) => console.log(res1, res2))
.catch((rej1, rej2) => console.log(rej1, rej2));