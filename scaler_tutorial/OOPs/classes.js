// JavaScript Classes

class Persion {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  welcome() {
    console.log(`Welcome ${this.name}`);
  }
}

let persion1 = new Persion("Supriyo Das", 36);
let persion2 = new Persion("Gobinda Pal", 22);

console.log(persion1); // Persion { name: 'Supriyo Das', age: 36 }

persion2.welcome(); // Welcome Gobinda Pal
