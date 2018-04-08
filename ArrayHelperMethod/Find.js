// Find something in an array and return

// Example 1
var users = [
  { name: 'Jill' },
  { name: 'Alex' },
  { name: 'Bill' },
  { name: 'Alex' },
]

var user = users.find((user) => user.name === 'Alex')

// console.log(user)


// Example 2
function Car(model) {
  this.model = model
}

var cars = [
  new Car('Buick'),
  new Car('Camaro'),
  new Car('Focus')
]

var car = cars.find((car) => car.model === 'Focus')

// console.log(car)


// Example 3
var posts = [
  { id: 1, title: 'New Post' },
  { id: 2, title: 'Old Post' }
]

var comment = { postId: 1, content: 'Great Post' };

var postForComment = (post, comment) => {
  return posts.find(post => post.id === comment.postId)
}

var res = postForComment(posts, comment)

console.log(res)