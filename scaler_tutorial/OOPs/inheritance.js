// Inheritance in JavaScript

class Animal {
  constructor(_species, _sound, _legs) {
    this.species = _species;
    this.sound = _sound;
    this.legs = _legs;
  }
}

class cat extends Animal {
  constructor(_species, _sound, _legs, _name, _age, _color) {
    super(_species, _sound, _legs);
    this.name = _name;
    this.age = _age;
    this.color = _color;
  }

  makeSound() {
    console.log(`${this.species} sounds ${this.sound}`);
  }
}

let myPet = new cat("Cat", "Meow", "Four", "Newton", 2, "White");

console.log(myPet);

myPet.makeSound();
