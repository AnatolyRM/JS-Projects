const array = [1, 1, 2, 3, 5, 8, 13]

function slice(arr, start, end) {
  const result = []
  let lastIndex = arr.length

  // const lastIndex = end ? end : arr.length
  if (end < 0) {
    lastIndex -= Math.abs(end)
  }

  for (let i = start; i < lastIndex; i++) {
    result.push(arr[i])
  }

  return result
}

// const res = array.slice(2)
// const res2 = array.slice(2, -1)

const res = slice(array, 2)
const res2 = slice(array, 2, -1)

console.log('res', res)
console.log('res2', res2)
console.log('array', array)