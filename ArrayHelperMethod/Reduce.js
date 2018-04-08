// Example 1
var numbers = [10, 20, 30]

var number = numbers.reduce((sum, number) => sum + number, 5)

// console.log(number)


// Example 2
var primaryColors = [
  { color: 'red' },
  { color: 'yellow' },
  { color: 'blue' },
]


var colors = primaryColors.reduce((previous, primaryColor) => {
  previous.push(primaryColor.color)
  return previous
}, [])

console.log(colors)


// Interview Question

// Write a function for balanced params "()()"
function balancedParens(string) {
  return !string.split("").reduce(function(previous, char) {

    if (previous < 0) {
      return previous
    }
    if (char === "(") {
      return ++previous
    }

    if (char === ")") {
      return --previous
    }
    return previous
  }, 0)
}

console.log(balancedParens("((())"))