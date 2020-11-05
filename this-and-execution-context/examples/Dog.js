class Dog {
  constructor(firstName, favSnacks) {
    this.firstName = firstName
    this.favSnacks = favSnacks
  }

  sayName() {
    console.log(`woof my name is ${this.firstName}`)
  }

  sayFavSnacks() {
    this.favSnacks.forEach(snack => {
      console.log(`${this.firstName} likes ${snack}`)
    })
  }
}