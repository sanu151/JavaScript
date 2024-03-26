// ES6 Class -> constuctor, set, get.

class student {
    constructor (id, name) {
        this.id = id;
        this.name = name;
    }


    set studentName(name){
        this.name = name;
    }

    get studentInfo(){
        return this.id+ " " + this.name;
    }
}

let s1 = new student(101, "Supriyo Das");
let s2 = new student(102, "Rupa Das");

console.log(s1);
console.log(s2.id);
console.log(s2.name);
s1.studentName = "Sanu";
console.log(s1.studentInfo);