function Person(_name, _age) {
  this.name = _name;
  this.age = _age;

  //   this.getdata = () => {
  //     console.log(`Hi, I am ${this.name}, my age is ${this.age}`);
  //   };
}

Person.prototype.getdata = function () {
  console.log(`Hi, I am ${this.name}, my age is ${this.age}`);
};

let person1 = new Person("Sanu", 36);
let person2 = new Person("Rupa", 27);

console.log(person1.getdata());
console.log(person2);
