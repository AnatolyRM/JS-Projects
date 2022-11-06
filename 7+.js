function formatDuration(seconds) {
  // Проверка на ноль
  if (seconds === 0) return 'now'

  let year = Math.floor(seconds / 31536000)
  let day = Math.floor(seconds / 86400) % 365
  let hour = Math.floor(seconds / 3600) % 24
  let minute = Math.floor(seconds / 60) % 60
  let second = seconds % 60

  //добавление множественного окончания
  const filterS = (num, name) => num > 1 ? `${name}s` : name

  //массив объектов времени
  const objTime = [
    {
      name: `${filterS(year, 'year')}`,
      value: year,
    },
    {
      name: `${filterS(day, 'day')}`,
      value: day,
    },
    {
      name: `${filterS(hour, 'hour')}`,
      value: hour,
    },
    {
      name: `${filterS(minute, 'minute')}`,
      value: minute,
    },
    {
      name: `${filterS(second, 'second')}`,
      value: second,
    },
  ]

  //массив в строковом прелставлении
  const vArr = objTime.filter(el => el.value).map(el => `${el.value} ${el.name}`)

  //вывод
  if (vArr.length === 1){
    return `${vArr.at(0)}`
  } else if (vArr.length === 2){
    return `${vArr.at(0)} and ${vArr.at(1)}`
  } else {
    return `${vArr.slice(0,-1).join(', ')} and ${vArr.at(-1)}`
  }
}