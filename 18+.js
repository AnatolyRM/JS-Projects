function createFunctions(n) {
  const callbacks = [];

  for (let i = 0; i < n; i++) {
    callbacks.push(function () {
      return i;
    });
  }

  return callbacks;
}

let callbacks = createFunctions(5);

for (var i = 0; i < callbacks.length; i++) {
  console.log(`${(callbacks[i]())} 'Function with index ' ${i})`)
}