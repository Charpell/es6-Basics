
// ES 5
function createBookShop(inventory) {
  return {
    inventory: inventory,
    inventoryValue: function() {
      return this.inventory.reduce((total, book) => total + book.price, 0)
    },
    priceForTitle: function(title) {
      return this.inventory.find(book => book.title === title).price
    }
  }
}

const inventory = [
  { title: 'Harry Porter', price: 10 },
  { title: 'Eloquent Javascript', price: 15 }
]

const bookShop = createBookShop(inventory);

const inventoryValue = bookShop.inventoryValue()
const priceForTitle = bookShop.priceForTitle('Harry Porter')

// console.log(inventoryValue)
// console.log(priceForTitle)


// ES6
function createBookShop(inventory) {
  return {
    inventory,
    inventoryValue() {
      return this.inventory.reduce((total, book) => total + book.price, 0)
    },
    priceForTitle(title) {
      return this.inventory.find(book => book.title === title).price
    }
  }
}