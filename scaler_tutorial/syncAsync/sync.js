const fs = require("fs");

console.log(`first line`);

let data = fs.readFileSync("demo.txt", "utf-8");
console.log(data);

console.log(`last line`);
