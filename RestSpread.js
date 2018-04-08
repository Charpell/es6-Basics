function addNumbers(numbers) {

}

addNumbers([1,2,3,4,5,6])


// Rest
function addNumbers(...numbers) {

}

addNumbers(1,2,3,4,5,6)   // Without square bracket


// Spread
const defaultColors = ['red', 'green']
const userFavouriteColorColors = ['orange', 'yellow']
const fallColors = ['fire red', 'fall orange']

const allColors = [ 'green', 'blue', ...fallColors, ...defaultColors, ...userFavouriteColorColors]

// console.log(allColors)


// Example using Rest and Spread
function validateShoppingList(...items) {
  if (items.indexOf('milk') < 0) {
    return [ 'milk', ...items ]
  }
  return items
}

validateShoppingList('oranges', 'bread')





const MathLibrary =