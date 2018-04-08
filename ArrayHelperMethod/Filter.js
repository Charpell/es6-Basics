// Example 1
var products = [
  { name: 'cucumber', type: 'vegetable' },
  { name: 'banana', type: 'fruit' },
  { name: 'celery', type: 'vegetable' },
  { name: 'orange', type: 'fruit' },
]

var fruit = products.filter(product => product.type === 'fruit')

// console.log(fruit)

// Example 2
var products = [
  { name: 'cucumber', type: 'vegetable', quantity: 0, price: 1 },
  { name: 'banana', type: 'fruit', quantity: 10, price: 15 },
  { name: 'celery', type: 'vegetable', quantity: 30, price: 9 },
  { name: 'orange', type: 'fruit', quantity: 3, price: 5 },
]


// Type is vegetable, quantity is greater than 0, price is lessthan 10
var products = products.filter((product) => {
  return product.type === 'vegetable' && product.quantity > 0 && product.price < 10
})

// console.log(products)


// Example 3
var post = { id: 4, title: 'New Post' };

var comments = [
  { postId: 4, content: 'awseome post' },
  { postId: 3, content: 'it was okay' },
  { postId: 4, content: 'neat' },
]

// Get comments for PostId 4

var commentsForPost = (post, comments) => {
  return comments.filter((comment) => comment.postId === post.id)
}

console.log(commentsForPost(post, comments))