// Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.
// input: 'Hello'
// output: 'olleH'

function reverseString(str) {
    let newStr = '';
    // Base case
    if (str.length <= 0) {
      return newStr;
    }
    // Recursive case
    newStr = reverseString(str.slice(1)).concat(str[0]);
    return newStr;
}
  
console.log(reverseString('Hello'))