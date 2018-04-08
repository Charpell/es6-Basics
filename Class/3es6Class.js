class Car {
  constructor({ title }) {
    this.title = title;
  }

  drive() {
    return 'vroom'
  }
}

const car = new Car({ title: 'Toyota'})
console.log(car)
console.log(car.drive())



// Inheritance
class Toyota extends Car {
  constructor(props) {
    super(props)
    
  }

  honk() {
    return 'beep'
  } 
}

const toyota = new Toyota({ color: 'red' })

console.log(toyota.honk(), toyota.drive())

