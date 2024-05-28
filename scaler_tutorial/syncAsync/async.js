const fs = require("fs");

console.log(`first line`);

let data = fs.readFile("demo.txt", "utf-8", rfe); // now the block of code will execute leter
function rfe(err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
}

let data1 = fs.readFile("demo1.txt", "utf-8", rfe1);
function rfe1(err, data1) {
  if (err) {
    console.log(err);
  } else {
    console.log(data1);
  }
}

let data2 = fs.readFile("demo2.txt", "utf-8", ref2);
function ref2(err, data2) {
  if (err) {
    console.log(err);
  } else {
    console.log(data2);
  }
}

console.log(`last line`);
