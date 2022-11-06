function duplicateEncode(word) {
  const arr = [...word.toLowerCase()]

  //счетчик повторных букв
  const tempObj = {}
  for (let elem of arr) {
    if (tempObj[elem] === undefined) {
      tempObj[elem] = 1;
    } else {
      tempObj[elem]++;
    }
  }

  // массив дубликатов
  const arrDubl = []
  for (const key in tempObj) {
    if (tempObj[key] > 1) arrDubl.push(key)
  }

  // вывод
  for (let i = 0; i < arr.length; i++) {
    (arrDubl.includes(arr[i])) ? arr[i]=')' : arr[i] = '('
  }

  return arr.join('')
}
// РЕШЕНИЕ!!!
// return word
//   .toLowerCase()
//   .split('')
//   .map(function (a, i, w) {
//     return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
//   })
//   .join('');