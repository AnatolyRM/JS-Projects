const array = [1, 2, 3, 4, 5, 6, 7, 8]

const result = array.reduce((sum, item) => sum + item, 0)

const result2 = array.reduce((acc, item, index) => {
  acc.push(item * item)
  return acc
}, [])

const cart = [
  {title: 'Apple', price: 49},
  {title: 'Banana', price: 149}
]

const total = cart.reduce((sum, item) => {
  return sum + item.price
}, 0)

console.log(total)