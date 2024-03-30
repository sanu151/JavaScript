// Promise.Race -> return one result which promise is executed first.

let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Completed Promise 1")
    }, 3000);
})

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Completed Promise 2")
    }, 1000);
})

Promise.race([promise1, promise2]).then(rec => console.log(rec));