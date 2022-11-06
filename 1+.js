function brightest(colors) {
  if (colors.every(el => el.includes('FF'))) return colors[0]

  const newArr = colors.map(el => hexToRgb(el))
  function hexToRgb(string) {
    const a = []
    a.push(parseInt(string.slice(1, 3), 16))
    a.push(parseInt(string.slice(3, 5), 16))
    a.push(parseInt(string.slice(5, 7), 16))   
    return a.reduce((a, b) => a > b ? a : b)
  }

  let maxIndex = newArr.indexOf(Math.max.apply(null, newArr))

  return colors[maxIndex]
}