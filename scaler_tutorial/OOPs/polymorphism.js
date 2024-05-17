// Polymorphism in JavaScript

class Animal {
  sound() {
    console.log(`Animal make differente Sound`);
  }
}

class Cat {
  sound() {
    console.log("Cat Mews");
  }
}

class Dog {
  sound() {
    console.log("Dog Barks");
  }
}

let animal1 = new Animal();
let cat1 = new Cat();
let dog1 = new Dog();

animal1.sound();
cat1.sound();
dog1.sound();
