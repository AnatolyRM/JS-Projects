const array = [1, 2, 3, 4, 5, 6, 7]

function reverse(arr) {
  const copy = arr.concat()
  for (let i = 0; i < arr.length; i++) {
    arr[i] = copy[arr.length - 1 - i]
    // 0 -> 7 - 1 - 0 = 6
    // 1 -> 7 - 1 - 1 = 5
  }

  return arr
}

// console.log(array.concat().reverse())
// console.log(array)

console.log(reverse(array))
console.log(array)