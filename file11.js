class Animal {
    constructor(name) {
      this.name = name;
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
    constructor(name, owner) {
      super(name);
      this.owner = owner;
      this.voice = "Meow";
    }
    
  }
  
  class Dog extends Animal {
    constructor(name, owner) {
      super(name);
      this.owner = owner;
      this.voice = "Gaff";
    }
  }

const whisker = new Cat("Whisker", "Bob");
whisker.speak();
whisker.move(5);
whisker.belongsTo();

const felix = new Cat("Felix", "Tom");
felix.speak();
felix.move(5);
felix.belongsTo();

const leopold = new Cat("Leopold", "Jack");
leopold.speak();
leopold.move(5);
leopold.belongsTo();

const beethoven = new Dog("Beethoven", "George");
beethoven.speak();
beethoven.move(10);
beethoven.belongsTo();

const hachi = new Dog("Hachi", "Parker");
hachi.speak();
hachi.move(10);
hachi.belongsTo();

const scoobyDoo = new Dog("Scooby-Doo", "Shaggy");
scoobyDoo.speak();
scoobyDoo.move(10);
scoobyDoo.belongsTo();