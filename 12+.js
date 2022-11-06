function sortByBit(arr) {
  return arr.sort((a,b)=> {
      if ((+a.toString(2).replace(/0/g, '')) === (+b.toString(2).replace(/0/g, ''))){
        return a - b
      } else {
        return ((+a.toString(2).replace(/0/g, '')) - (+b.toString(2).replace(/0/g, '')))
      }
    })

}

//[1, 8, 3, 3, 5, 6, 9, 7]
console.log(sortByBit([
  3, 8, 3, 6, 5, 7, 9, 1
]))

// const sortByBit = arr => arr.sort((a, b) => a.toString(2).replace(/0/g, '') - b.toString(2).replace(/0/g, '') || a - b)