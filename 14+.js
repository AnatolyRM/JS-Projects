function calculate(...a) {
  return function (...b) {
    let sumA = a.reduce((ac, i) => ac + i)
    let sumB = b.reduce((ac, i) => ac + i)
    return sumA + sumB
  }
}

//const calculate = (...args1) => (...args2) => [...args1, ...args2].reduce((s, v) => s + v);