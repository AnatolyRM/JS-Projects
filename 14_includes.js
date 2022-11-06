const array = [1, 2, 3, 4, 5, 6, 7]

function includes(arr, search, start = 0) {
  // for (let i = start; i < arr.length; i++) {
  //   if (arr[i] === search) {
  //     return true
  //   }
  // }
  // return false

  return arr.indexOf(search, start) > 0 ? true : false 
}

console.groupCollapsed('Native')
console.log(array.includes(3))
console.log(array.includes(3, 3))
console.log(array.includes(8))
console.groupEnd()

console.group('Own Impl')
console.log(includes(array, 3))
console.log(includes(array, 3, 3))
console.log(includes(array, 8))
console.groupEnd()