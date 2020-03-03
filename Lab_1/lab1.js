//Sum of Squares of all numbers
const questionOne = function questionOne(arr) {
    var sum = 0;
    var item;

    for (item = 0; item < arr.length; item++) {
        sum += arr[item] * arr[item]; 
    }    
    return sum
}

//Fibonnaci
const questionTwo = function questionTwo(num) { 
    if (num===0) 
    {
        return 0;
    } 
    else if (num===1) 
    {
        return 1;
    }
    else if (num===2)    
    {
        return 1
    } 
    else 
    {
        return questionTwo(num-1) + questionTwo (num-2);
    }
} 


//count vowels in a string
const questionThree = function questionThree(text) {
    const vowels = ['A','E','I','O','U','a','e','i','o','u']
    count = 0
    for (item of text) 
    {
        if (vowels.includes(item))
        count = count + 1
    }
    return count

}


//Factorial
const questionFour = function questionFour(num) {
        if (num < 0)
    {
        return NaN
    }
    else if (num==0) 
    {
        return 1
    }
    else if (num==1)
    {
        return 1
    }
    else
    {
        return num * questionFour(num-1)
    }
}


module.exports = {
    firstName: "Elton", 
    lastName: "Aloysius", 
    studentId: "10456065",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};

