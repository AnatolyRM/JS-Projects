function numberOfPairs(gloves) {

  const tempObj = gloves.reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1
    return acc
  }, {})
  console.log(tempObj)

  const pairGloves = {}
  for (const el in tempObj) {
    if (tempObj[el] % 2 == 0) pairGloves[el] = tempObj[el] / 2
    if (tempObj[el] % 2 == 1 && tempObj[el] > 2) pairGloves[el] = (tempObj[el] - 1) / 2
  }
  console.log(pairGloves)

  let count = 0
  for (const el in pairGloves) {
    count += pairGloves[el]
  }

  return count
}

console.log(numberOfPairs(
  [
    'Blue', 'Navy', 'Red',
    'Black', 'Gray', 'Olive',
    'Black', 'Black', 'Yellow',
    'Yellow', 'Gray', 'Blue',
    'Navy', 'Maroon', 'Green',
    'Olive', 'Gray', 'Fuchsia',
    'Gray', 'Green', 'Blue',
    'Purple', 'Black', 'Silver',
    'Olive', 'Lime', 'Purple'
  ]
))

//https://www.codewars.com/kata/58235a167a8cb37e1a0000db/train/javascript

// if (!Array.isArray(gloves)) return 0
// //объект подсчета цветов
// const tempObj = {}
// for (let elem of gloves) {
//   if (typeof elem != "string" || elem === "0" || elem === "null") continue
//   if (tempObj[elem] === undefined) {
//     tempObj[elem] = 1;
//   } else {
//     tempObj[elem]++;
//   }
// }
// console.log(tempObj)

// //объект парных цветов
// const pairGloves = {}
// for (const el in tempObj) {
//   if (tempObj[el] % 2 == 0) pairGloves[el] = tempObj[el] / 2
// }
// console.log(pairGloves)

// //подсчет пар
// let count = 0
// for (const el in pairGloves) {
//   count += pairGloves[el]
// }
// console.log(count)

// return count