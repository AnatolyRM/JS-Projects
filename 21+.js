function unluckyDays(year) {
  const res = [];
  for (let munth = 0; munth < 12; munth++) {
    const date = new Date(year, munth, 13);
    if (date.getDay() === 5) res.push(date)  
  }
  return res.length;
}

console.log(unluckyDays(1001))