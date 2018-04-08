// Destructure Array
const company = [ 'Google', 'Facebook', 'Uber' ]

const [ name, name2, name3, name4 ] = company;
console.log(name2)


// Destructure Object
var expense = {
  type: 'Business',
  amount: '$45 USD'
}

const { type, amount } = expense;
console.log(type)


// Destructure argument that are object
var savedFiled = {
  extension: 'jpg',
  name: 'repost',
  size: 14040
}

function fileSummary({ name, extension, size }, { color}) {
  return `The file ${name}. ${extension} is of size ${size}. The color is ${color}`
}

 const res = fileSummary(savedFiled, { color: 'red' })
 console.log(res)


// Destructuring  Arrays and Object at the Same time
// Example 1
const companies = [
  { name: 'Google', location: 'Mountain View'},
  { name: 'Facebook', location: 'Green View'}
]

const [{ location } ] = companies;

// console.log(location)


// Example 2
const Google = {
  locations: ['Mountain View', 'New York', 'London']
}

const { locations: [ locati ]} = Google;
console.log(locati)

