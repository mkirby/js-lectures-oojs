// Creating Objects
// POJO
// const robot1 = { name: 'sparko', weight: 1000, specialty: 'making sparks' }
// const robot2 = { name: 'the iron giant', weight: 9999999, specialty: 'being giant and made of iron' }
// const robot3 = { name: 'bender', weight: 500, specialty: 'bending things' }


// Prehistoric OOJS
function rechargeBatteriesFn() {
  console.log(`${this.name} is recharging its batteries`)
}

function robotFactory(name, weight, specialty) {

  return {
    name,
    weight,
    specialty,
    rechargeBatteries: rechargeBatteriesFn
  }
}

const robot1 = robotFactory('sparko', 1000, 'making sparks')
const robot2 = robotFactory('the iron giant', 9999999, 'being giant and made of iron')
const robot3 = robotFactory('bender', 500, 'bending things')

// Bronze Age OOJS
function Robot(name, weight, specialty) {
  // {} => this
  // {}.__proto__ = Robot.prototype
  this.name = name
  this.weight = weight
  this.specialty = specialty
}

const sparko = new Robot('sparko', 1000, 'making sparks')
const irong = new Robot('the iron giant', 9999999, 'being giant and made of iron')
const bender = new Robot('bender', 500, 'bending things')

Robot.prototype.rechargeBatteries = function() {
  console.log(`${this.name} is recharging its batteries`)
}

// Modern OOJS
class RobotClass {
  constructor(name, weight, specialty) {
    this.name = name
    this.weight = weight
    this.specialty = specialty   
  }

  rechargeBatteries() {
    console.log(`${this.name} is recharging its batteries`)
  }
}


const sparko2 = new RobotClass('sparko', 1000, 'making sparks')
const irong2 = new RobotClass('the iron giant', 9999999, 'being giant and made of iron')
const bender2 = new RobotClass('bender', 500, 'bending things')



class Dog {

  static all = []

  constructor(firstName, favSnacks) {
    this.firstName = firstName
    this.favSnacks = favSnacks
    Dog.all.push(this)
  }

  handleEvent = () => {
    console.log("something")
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
