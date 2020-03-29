// Write a recursive function that prints the Fibonacci sequence of a given number. The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers. For example, the 7th Fibonacci number in a Fibonacci sequence is 13. The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.

function printSequence(num) {
    for (let i = 1; i <= num; i ++) {
      function fibonacci(input) {
          // Base case
          if (input <= 1) {
            return input;
          }
          // Recursive case
          return fibonacci(input - 1) + fibonacci(input - 2);
        }
      console.log(fibonacci(i))
    }
}
  
printSequence(7)
// output: 1 1 2 3 5 8 13
// fibonacci(6) + fibonacci(5)
// fibonacci(5) + fibonacci(4) // fibonacci(4) + fibonacci(3)
// fibonacci(4) + fibonacci(3) // fibonacci(3) + fibonacci(2)
// fibonacci(1) 