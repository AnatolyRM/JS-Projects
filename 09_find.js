const array = [1, 1, 2, 3, 5, 8, 13]

function find(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    const doesExists = callback(arr[i])
    if (doesExists) {
      return arr[i]
    }
  }
}

// const res = array.find(item => item === 8)

const people = [
  {name: 'Vladilen', age: 28},
  {name: 'Elena', age: 23},
  {name: 'Elena', age: 42}
]


const res = find(people, person => person.name === 'Elena' && person.age > 30)

console.log(res)