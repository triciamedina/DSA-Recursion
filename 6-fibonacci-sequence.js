let ticks = 0;
const fibonacciSequence = function(number) {
    // Base case
    if (number < 2) {
        ticks++
        return number
    }

    // General case
    ticks++
    return fibonacciSequence(number - 1) + fibonacciSequence(number - 2);

}

let number = 30;
console.log(fibonacciSequence(number), ticks);

// 3 => 5
// 4 => 9
// 5 => 15
// 6 => 25
// 12 => 465
// 16