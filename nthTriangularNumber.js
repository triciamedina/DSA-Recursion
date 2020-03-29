// Calculate the nth triangular number. A triangular number counts the objects that can form an equilateral triangle. The nth triangular number is the number of dots composing a triangle with n dots on a side, and is equal to the sum of the n natural numbers from 1 to n. This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.

// input: 2 // output: 3
// sum of 1 to n // 1 + 2 
// input: 3 // output: 6
// sum of 1 to 3// 1 + 2+ 3
// input: 4 // output: 10
// sum of 1 to 4// 1 + 2+ 3+ 4

function nthTriangularNumber(num) {
    // Base case
    if (num <= 0) {
      return 0;
    }
    // Recursive case
    return num + nthTriangularNumber(num - 1)
}
  
console.log(nthTriangularNumber(7))