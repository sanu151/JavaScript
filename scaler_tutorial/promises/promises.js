// Promises

let myPromise = new Promise(function (resolve, rejected) {
  let a = 4;
  let b = 5;

  if (a === b) {
    resolve("The values are equal");
  } else {
    rejected("The values are not equal");
  }
});

myPromise.then((result) => {
  console.log(result);
});
myPromise.catch((result) => {
  console.log(result);
});
