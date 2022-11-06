Array.prototype.filter = function(fun, thisArg) {
    let len = this.length
    const res = []

    let thisA = arguments[1]

    for (let i = 0; i < len; i++){
        if (i in this){
            let val = this[i]
            if (fun.call(thisA, val, i, this)) res.push(val)
        }
    }
    return res
}