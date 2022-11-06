const array = [1, 2, 3, 4, 5, 6, 7]
const next = [8, 9]
const next2 = [10 ,11]

function concat(arr, sub = []) {
  const copy = []

  const totalLength = arr.length + sub.length

  for (let i = 0; i < totalLength; i++) {
    if (i < arr.length) {
      copy[i] = arr[i]
    } else {
      copy[i] = sub[i - arr.length]
    }
  }

  return copy
}

// const copy = array.concat()
// console.log(array.concat(next, next2))
// console.log([0].concat(array, next, next2))
// console.log('copy', copy)
// console.log('array', array)

console.log(concat(array))
console.log(concat(array, [42, 42]))