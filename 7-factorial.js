let ticks = 0;
const factorial = function(number) {
    // Base case
    if (number === 1) {
        ticks++
        return number
    }

    // General case
    ticks++
    return number * factorial(number - 1);

}

let number = 5;
console.log(factorial(number), ticks);