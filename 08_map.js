const array = [1, 1, 2, 3, 5, 8, 13]

function map(arr, callbackFn) {
  const result = []

  for (let i = 0; i < arr.length; i++) {
    result.push(callbackFn(arr[i], i, arr))
  }

  return result
}

// const newArray = array.map(item => item ** 2)
const newArray = map(array, item => item ** 2)

console.log('newArray', newArray)