Array.prototype.map = function (callback, thisArg) {
  var T, A, k;
  if (this == null) {
    throw new TypeError('this is null or not defined');
  }
  var O = Object(this);
  var len = O.length >>> 0;// QUESTION 1 : What is the need for this line of code?
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }
  if (arguments.length > 1) {
    T = arguments[1];
  }
  //  QUESTION 2 :What is the need for the if condition and why are we assiging T=arguments[1]?
  A = new Array(len);
  k = 0;
  while (k < len) {
    var kValue, mappedValue;
    if (k in O) {
      kValue = O[k];
      mappedValue = callback.call(T, kValue, k, O);
      // QUESTION 3: why do we pass T,k and O when all you need is kvalue?
      A[k] = mappedValue;
    }
    k++;
  }
  return A;

}

// const newArr = new Array(this.length)
// for (let i = 0; i < this.length; i++) {
//   if (i in this) newArr[i] = callback.call(context,this[i], i, this)
// }
// return newArr