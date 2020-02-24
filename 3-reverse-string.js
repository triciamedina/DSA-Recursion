let ticks = 0;
const reverseString = function(string) {
    // Base case
    if (string.length === 1) {
        ticks++
        return string
    };
    
    // General case
    ticks++
    return string.slice(string.length - 1) + reverseString(string.slice(0, string.length - 1));

}

let string = 'hello'
console.log(reverseString(string), ticks);