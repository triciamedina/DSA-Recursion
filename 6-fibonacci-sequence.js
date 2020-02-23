const fibonacciSequence = function(number) {
    // Base case
    if (number < 2) {
        return number
    }

    // General case
    return fibonacciSequence(number - 1) + fibonacciSequence(number - 2);

}

let number = 7;
console.log(fibonacciSequence(number));
