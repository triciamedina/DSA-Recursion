const factorial = function(number) {
    // Base case
    if (number === 1) {
        return number
    }

    // General case
    return number * factorial(number - 1);

}

let number = 5;
console.log(factorial(number));