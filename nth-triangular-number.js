const nthTriangularNumber = function(n) {

    // Base case
    if (n === 1) {
        return n
    };
    
    // General case
    return n + nthTriangularNumber(n - 1);

}

let n = 9
console.log(nthTriangularNumber(n));