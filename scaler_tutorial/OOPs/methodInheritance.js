// Method Inheritance

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Welcome ${this.name}`);
  }
}

class Employee extends Person {
  constructor(name, age, empID, position) {
    super(name, age);
    this.empID = empID;
    this.position = position;
  }

  hello() {
    super.greet();
  }
}

let employee1 = new Employee("Ratul", 32, 2197, "Sales Executive");

console.log(employee1);
employee1.hello();
