function myLanguages(results) {
  const newObj = {}
  for (let key in results) {
    if (results[key] >= 60) newObj[key] = results[key]
  }
  return  Object.keys(newObj).sort((a, b) => newObj[b] - newObj[a] )
}

//return Object.keys(results).filter(r => results[r] > 59).sort((a,b) => results[b] - results[a]);