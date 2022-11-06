function find(object, path) {

    const parts = path.split(".")
    let current = object
    for (let i = 0; i < parts.length; i++) {
        if (current.hasOwnProperty(parts[i])) {
            current = current[parts[i]]
        } else {
            return undefined
        }
    }
    return current
}

// return path.split('.').reduce(function(acc, pathName){
//     return (acc && acc.hasOwnProperty(pathName)) ? acc[pathName] : undefined;
// },object);