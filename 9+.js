function deepCount(a) {
  let n = 0

  const findArr = arr => {
    n += arr.length
    for (const el of arr) {
      if(Array.isArray(el)) findArr(el)
    }
  }
  findArr(a)

  return n
}

console.log(deepCount([[[[[[[[[]]]]]]]]] ))