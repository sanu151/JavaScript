// Variable dicleration and string concadination on ES6
let x = 10;

const y = 12; // This value cannot be changed.

if(true){
    let x = 4;
    console.log(`Inside if x = ${x}`);
}

console.log(`Outside block x = ${x}`);

// function decleration on ES6

const add = (x, y) => {
    let sum = x + y;
    console.log( `Sum is : ${sum}`);
}

add(12, 68);