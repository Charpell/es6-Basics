var numbers = [1,2,3,4,5]
var doubledNumbers = [];

var doubledNumbers = numbers.map((number) => number * 2)

console.log(doubledNumbers)


var cars = [
  { model: 'Buick', price: 'Cheap'},
  { model: 'Camaro', price: 'Expensive'}
]

var prices = cars.map((car) => car.price)

console.log(prices)