// Encapsulation

class Person {
  constructor(_name, _age) {
    var name = _name;
    var age = _age;
  }
  // Encapsulate values using getting and setting method
  getName() {
    return this.name;
  }
  setName(_name) {
    this.name = _name;
  }
  getAge() {
    return this.age;
  }
  setAge(_age) {
    this.age = _age;
  }
}

let person1 = new Person();
person1.setName("Supriyo");
person1.setAge(36);

// person1 values are encapsulated and can't change using getName method.
console.log(person1.getName());
console.log(person1.getAge());
