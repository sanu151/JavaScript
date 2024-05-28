// Serial Execution of Asyncronous function

const fs = require("fs");

console.log(`First Line`);

let data1 = fs.readFile("demo.txt", "utf-8", cb);
function cb(err, data1) {
  if (err) {
    console.log(err);
  } else {
    console.log(data1);
    let data2 = fs.readFile("demo1.txt", "utf-8", cb1);
  }
}

function cb1(err, data2) {
  if (err) {
    console.log(err);
  } else {
    console.log(data2);
    let data3 = fs.readFile("demo2.txt", "utf-8", cb2);
  }
}

function cb2(err, data3) {
  if (err) {
    console.log(err);
  } else {
    console.log(data3);
  }
}

console.log(`Last Line`);
