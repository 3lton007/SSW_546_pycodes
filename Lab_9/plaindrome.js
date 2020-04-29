
let sub_btn = document.getElementById('sub_btn')
let errorDiv = document.getElementById('error')
let my_form = document.getElementById("my_form")


function palindrome(word) {
    re = /[\W_]/g
    str1 = word.toLowerCase()
    str = str1.replace(re,'')
    revstr = str.split('').reverse().join('')
    if(revstr === str)
        return true
    else {
        return false
    }
};


my_form.addEventListener('submit', (event) => {
    let text = document.getElementById('palin_text')
    let str_text = text.value;
    event.preventDefault()
    let result = palindrome(str_text);
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    
    if (str_text) {
        if (result == true) {
            li.appendChild(document.createTextNode(str_text));
            li.setAttribute("class", "is-palindrome");
        } else {
            li.appendChild(document.createTextNode(str_text));
            li.setAttribute("class", "isnot-palindrome");
        }
        ul.appendChild(li)
        my_form.reset()
    } else {
            errorDiv.hidden = false
            errorDiv.innerHTML = "You must enter a value" 
    }
})


