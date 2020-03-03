

const equality = function deepEquality(obj1, obj2) {
    if(typeof obj1 != "object" || typeof obj2 != "object") {
        throw "one of the object that has passed is not an object"
}

    let var1 = Object.keys(obj1)
    let var2 = Object.keys(obj2)

    if (var1.length != var2.length) {
        return false
    }

    for (let i = 0; i < var1.length; i++) {
        if (obj1[var1[i]] != obj2[var2[i]]) {
            return false
        }
    }

    return true

}


const unique_Elements = function unique_Elements(arr) {
    if (arguments.length != 1 || arr.constructor !== Array)
        throw "Not an Array" 
    return new Set(arr).size
}


const count_str = function countOfEachCharacterInString(str) {
    if (arguments.length !=1 || str.constructor !== String)
        throw "Not a String"
    
    const yo = []
    for (item of str)
    {
        if(yo[item])
            yo[item]++
        else
            yo[item] = 1
    }
    return yo
}


module.exports = {
    equality,
    unique_Elements,
    count_str
};