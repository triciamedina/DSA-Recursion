let ticks = 0;
const stringSplitter = function(string, separator) {
    // Need bounce case if string is only separator

    // Base case
    if ((string.length === 0) || (!string.includes(separator))) {
        ticks++
        return [string]
    }

    // General case
    
    // If the first character in the string is the separator
    // Slice separator out and pass new string through string splitter
    if (string.slice(0, 1) === separator) {
        ticks++
        return stringSplitter(string.slice(1), separator)
    }

    // If the first character in the string is NOT the separator
    if (string.slice(0, 1) !== separator) {
        // And the second character in the string is NOT the separator
        // Return an array with a string containing the first and second character
        // And concatenate that with the result of passing the string minus first 2 characters
        // With this method, if the third, fourth, fifth, etc. characters are all NOT the separator
        // Merging an array with a string will coerce to a string and concatenate them into one string
        if (string.slice(1, 2) !== separator) {
            ticks++
            return [string.slice(0, 2)].concat(stringSplitter(string.slice(2), separator))
        }
        // If the second character in the string is the separator
        // Return an array with a string containing the first character 
        // And concatenate that with the result of passing the string minus the first character
        ticks++
        return [string.slice(0, 1)].concat(stringSplitter(string.slice(1), separator))
    } 

}

let string = '02/20/2020'
let separator = '/'
console.log(stringSplitter(string, separator), ticks);