const reverseString = function(string) {

    // Base case
    if (string.length === 1) {
        return string
    };
    
    // General case
    return string.slice(string.length - 1) + reverseString(string.slice(0, string.length - 1));

}

let string = 'hello'
console.log(reverseString(string));