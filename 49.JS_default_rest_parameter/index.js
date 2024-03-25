"use strict"

// Default parameter
const mymsg = (text = `This is default parameter`) => {
    console.log(`${text}`);
}

mymsg();
mymsg(`My name is Supriyo Das`);

// Rest parameter

const printNumbers = (x, y, ...z) => {
    console.log(`x = ${x} , y = ${y} , z = ${z}`);
}

printNumbers(10, 29, 34, 30, 55, 27);