// Write a recursive function that prints out the binary representation of a given number. For example, the program should take 3 as an input and print 11 as output, or 25 as an input and print 11001 as an output. Note that the binary representation of 0 should be 0.

// input: 3
// 3 % 2 = 1
// 1 % 2 = 1

// input: 25
// 25 % 2 = 1
// 12 % 2 = 0 
function binary(num) {
    // Base case
    if (num <= 1) {
      return num;
    }
    // Recursive case
    return `${binary(Math.floor(num / 2))}` + `${num % 2}`
}
  
console.log(binary(25));