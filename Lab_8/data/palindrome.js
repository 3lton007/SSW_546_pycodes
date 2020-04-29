
let exportedMethods = {
    palindrome(word) {
        re = /[\W_]/g
        str1 = word.toLowerCase()
        str = str1.replace(re,'')
        revstr = str.split('').reverse().join('')
        if(revstr === str)
            return revstr
        else {
            return false
        }
    }
}

module.exports = exportedMethods;

