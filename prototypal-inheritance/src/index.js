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


// Modern OOJS

