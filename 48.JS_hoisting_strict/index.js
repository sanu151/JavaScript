"use strict"
x = 30;
console.log(`x = ${x}`);
var x;

try{
    y = 20;
    console.log(y);
}catch(err){
    console.log(err.name);
}