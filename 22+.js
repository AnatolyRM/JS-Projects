function handAngle(date) {
  //2022-09-20T00:00:04.936Z
  
  let msDate = Date.parse('2022-09-20T09:00:42.651Z')
  let hours = new Date(msDate).getHours()
  let minutes = new Date(msDate).getMinutes()
  if (hours === 12) hours = 0
  let degree = (hours * 30) - (minutes * 5.5)
  let pi = Math.PI
  let ans = degree * (pi / 180)
  return Math.min(((360 - degree) * (pi / 180)), ans)
}

handAngle()

// for (const key in date) {
//   if (Object.hasOwnProperty.call(date, key)) {
//     const d = date[key]
//     const msDate = Date.parse(d)
//     const hours = new Date(msDate).getHours()
//     const minutes = new Date(msDate).getMinutes()

//     if (hours === 12) hours = 0
//     const degree = Math.abs((hours * 30 + minutes * 0.5) - (minutes * 6))
//     const pi = Math.PI
//     const ans = degree * (pi / 180)
//     return Math.min(360 - ans, ans)
//   }
// }