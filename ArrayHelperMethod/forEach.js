var numbers = [1,2,3,4,5]
var sum = 0

// Method 1
function adder(number) {
  sum += number
}

numbers.forEach(adder)

// Method 2
numbers.forEach(function(number) {
  sum += number
})

console.log(sum)



var colors = [ 'red', 'blue', 'green' ]

var re = colors.forEach(color => console.log(color))

re