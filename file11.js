class Animal {
  constructor(name, owner, voice) {
    this.name = name;
    this.owner = owner;
    this.voice = voice;
  }
  speak() {
    console.log(`${this.name} says ${this.voice}.`);
  }

  move(step) {
    console.log(`${this.name} takes ${step} steps.`);
  }

  belongsTo() {
    console.log(`${this.name} is belong to ${this.owner}.`);
  }

}

class Cat extends Animal{
  constructor(name, owner, voice) {
    super(name, owner, voice);
  }
  
}

class Dog extends Animal {
  constructor(name, owner, voice) {
    super(name, owner, voice);
  }
}

const whisker = new Cat("Whisker", "Bob", "Hello!");
whisker.speak();
whisker.move(5);
whisker.belongsTo();

const felix = new Cat("Felix", "Tom", "Hello!");
felix.speak();
felix.move(5);
felix.belongsTo();

const leopold = new Cat("Leopold", "Jack", "Hello!");
leopold.speak();
leopold.move(5);
leopold.belongsTo();

const beethoven = new Dog("Beethoven", "George", "Hello!");
beethoven.speak();
beethoven.move(10);
beethoven.belongsTo();

const hachi = new Dog("Hachi", "Parker", "Hello!");
hachi.speak();
hachi.move(10);
hachi.belongsTo();

const scoobyDoo = new Dog("Scooby-Doo", "Shaggy", "Hello!");
scoobyDoo.speak();
scoobyDoo.move(10);
scoobyDoo.belongsTo();