// Write a recursive function that splits a string based on a separator (similar to String.prototype.split). Don't use JS array's split function to solve this problem.

// Input: ab/cd/efgh
// Output: ["ab", "cd", "efgh"]

function stringSplitter(str, separator) {
    let arr = [];
    let subStr = '';
    // iterate through sting one letter at a time
    for (let i = 0; i < str.length; i++) {
      // if the letter is the separator
      if (str[i] === separator) {
        // push current substring to array
        // recursively call stringSplitter on spliced version of string
        // concatenate existing array with result of recursive call
        arr.push(subStr);
        arr = arr.concat(stringSplitter(str.slice(i + 1), separator));
        // don't iterate anymore
        break;
      } else {
        // if not the separator keep building substring
        subStr = subStr.concat(str[i]);
        // if reached the end of the string without hitting a separator
        // push subtring to arr
        if (i === str.length - 1) {
          arr.push(subStr)
        }
      }
    }
    return arr;
}
  
console.log(stringSplitter('20/20/2020', '/'))