function createSecretHolder(secret) {
  return {
    num: secret,
    getSecret(){
      return this.num
    },
    setSecret(value){
      this.num = value
    }
  }
}

let obj = createSecretHolder(5)

console.log(obj.getSecret())

// var _secret = secret;
// return {
//   setSecret: function (s) {
//     _secret = s;
//   },
//   getSecret: function () {
//     return _secret;
//   }
// };