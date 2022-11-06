const runLengthEncoding = str => {
  const tempArr = [...str]
  let qty = 1;
  const arrs = []

  for (let i = 0; i < tempArr.length; i++) {
    let a = tempArr[i]
    let v = tempArr[i+1]
    if (a === v) {
      qty++
    } else {
      arrs.push([+`${qty}`, `${a}`])
      qty = 1
    }
  }

  return arrs
}

console.log(runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb"))