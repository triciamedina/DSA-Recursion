// Write a recursive function that finds the factorial of a given number. The factorial of a number can be found by multiplying that number by each number between itself and 1. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

// input: 5
// 5 * factorial(4)
//          4 * factorial(3)
//                    3 * factorial(2)
//                              2 * factorial(1)
//                                        1
// output: 120

function factorial(num) {
    // Base case
    if (num <= 1) {
      return 1;
    }
    // Recursive case
    return num * factorial(num -  1)
}
  
console.log(factorial(10));