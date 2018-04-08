// Classes eliminates prototype Object

function Car(option) {
  this.title = option.title;
} 

Car.prototype.drive = function() {
  return 'vroom'
}


// Initialize Car
const car = new Car({ title: 'Focus' })

console.log(car.drive())
console.log(car)