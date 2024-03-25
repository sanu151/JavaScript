// for...of and for...in

const names = ['Supriyo', 'Rupa', 'Rishika'];

for(let name of names){
    console.log(name);
}

let student = {
    ID : 21913030024,
    name : 'Supriyo Das',
    program : 'BCA',
    cgpa : 8.82,
    email : '21913030024@kluniversity.in'
}

for(let x in student){
    console.log(`${x} : ${student[x]}`);
}