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

console.log(`last line`);
