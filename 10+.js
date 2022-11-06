function getLengthOfMissingArray(arrayOfArrays) {
  if (!arrayOfArrays?.length) return 0;

  if (arrayOfArrays.some(arr => !arr?.length)) {
    return 0
  }

  const sortedArray = arrayOfArrays
    .sort((a, b) => a.length - b.length)


  for (i = 0; i < sortedArray.length; i++) {
    const expectedLength = sortedArray[i].length + 1
    if (sortedArray[i + 1].length !== expectedLength) {
      return expectedLength
    }
  }

}

console.log(getLengthOfMissingArray([
  
]))

//https://www.codewars.com/kata/57b6f5aadb5b3d0ae3000611/train/javascript