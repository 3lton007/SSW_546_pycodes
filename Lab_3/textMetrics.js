
const simplify = (text) =>
{
    if(typeof(text) !== "string")
    {
        throw "The given txt is not a string"
    }

    //Using Regex To Simplify
    prop_letters = text.toLowerCase().replace(/[^0-9a-z\s]/g, '').replace(/[\s]+/g, ' ')
    return prop_letters
}


const createMetrics = (text) =>
{
    if(typeof(text) !== "string") 
    {
        throw "Proper String should be passed in the argument"
    }

    const vowels = ['A','E','I','O','U','a','e','i','o','u']
    count = 0
    for (item of text) 
    {
        if (vowels.includes(item))
        count = count + 1
    }

    const consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z','B','C','D','F','G','H','J','K','L','M','N','P','Q','R','S','T','V','W','X','Y','Z']
    cnt = 0
    for (item of text)
    {
        if (consonants.includes(item))
        cnt = cnt + 1
    }

    n_let = text.replace(/[0-9a-zA-Z\s]/g, '')


    let letters = 0
    let wrd_occur = {}
    let simple_txt = simplify(text)
    simple_txtlst = simple_txt.split(" ")

    simple_txtlst.forEach((word) => 
    {
        if(word !== " ")
        {
            if(wrd_occur[word])
            {
                wrd_occur[word] += 1
            }
            else
            {
                wrd_occur[word] = 1
            }
            letters += word.length
        }
    })

    
    return {
        totalLetters: letters,
        totalWords: simple_txtlst.length,
        uniqueWords: Object.keys(wrd_occur).length,
        longWords: simple_txtlst.filter((word) => word.length >= 6).length,
        AverageWordLength: letters / simple_txtlst.length,
        wordOccurances: wrd_occur,
        vowels: count,
        consonants: cnt,
        NonLetters: n_let.length
    }   
}

//console.log(createMetrics("Naruto %$*^% ^^Uzum^%&$%^&46 aki!!!!"))

module.exports = {
    simplify,
    createMetrics
}

