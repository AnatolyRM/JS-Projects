const array = [1, 2, 3, 4, 5, 6, 7]

function every(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    if (!fn(arr[i])) return false
  }
  return true
}

function some(arr, fn) {
  // for (let i = 0; i < arr.length; i++) {
  //   if (!fn(arr[i])) return false
  // }
  // return true
}

console.groupCollapsed('Native')
log(array.some(i => i % 2))
log(array.some(i => typeof i === 'string'))
log(array.every(i => i % 2))
log(array.every(i => typeof i === 'number'))
console.groupEnd()

console.group('Own Impl')
log(some(array, i => i % 2))
log(some(array, i => typeof i === 'string'))
log(every(array, i => i % 2))
log(every(array, i => typeof i === 'number'))
console.groupEnd()












function log(args) {
  console.log(args)
}

