const array = [1, 1, 2, 3, 5, 8, 13]

// function findIndex(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     const doesExists = callback(arr[i])
//     if (doesExists) {
//       return arr[i]
//     }
//   }
// }

const res = array.findIndex(item => item === 81)

console.log(res)