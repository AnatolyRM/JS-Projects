const array = [1, 2, 3, 4, 5, 6, 7]

function log(args) {
  console.log(args)
}

function filter(arr, callback) {

}

log(array.filter(item => item % 2 === 0))

const filtered = array
  .filter(item => item % 2)
  // 3 % 2 => return 1
  // 4 % 2 => return 0
  .filter(item => item >= 3)
  .map(item => item ** 2)
  .filter(item => item > 10)

log(filtered)

const values = [42, 1, null, undefined, 'a', 0, 1, 42, 'Vladilen', false, true, '', 'b', NaN]

log(values.filter(item => item))

const text = `Привет, я мат1 как раз тебя видеть, мат2 как давно тебя не было видно. Ты мат1 какая красива. Мат2 я рад.`

const restr = ['мат1', 'мат2']

function clear(word) {
  return !restr.includes(word.toLowerCase())
}

const clean = text
  .split(' ')
  .filter(clear)
  .join(' ')

log(clean)


