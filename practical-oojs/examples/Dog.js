class Dog {

  static all = []

  constructor(firstName, favSnacks) {
    this.firstName = firstName
    this.favSnacks = favSnacks
    Dog.all.push(this)
  }

  sayName() {
    console.log(`woof my name is ${this.firstName}`)
  }

  static findByName(firstName) {
    return Dog.all.find(dogInstance => dogInstance.firstName === firstName)
  }
}

// Dog.all = []
// Dog.findByName = function(firstName) {
//   return Dog.all.find(dogInstance => dogInstance.firstName === firstName)
// }

// examples
const dog = {
  firstName: "Fezzik2",
  favSnacks: []
}


const fezzik = new Dog("Fezzik", ["Peanut Butter", "Soccer Balls"])
const lucy = new Dog("Lucy", ["Dog Treats", "Turkey Sandwiches"])

const foundDog = Dog.findByName("Lucy")
console.log(foundDog)