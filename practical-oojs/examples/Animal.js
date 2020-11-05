class Animal {
  constructor(firstName) {
    this.firstName = firstName
  }

  sayName() {
    console.log(`my name is ${this.firstName}`)
  }
}


class Dog extends Animal {
  constructor(firstName, favSnacks) {
    super(firstName)
    this.favSnacks = favSnacks
  }
}

const dog = new Dog("Fezzik", ["Peanut Butter"])
dog.firstName