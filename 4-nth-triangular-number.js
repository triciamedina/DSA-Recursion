let ticks = 0
const nthTriangularNumber = function(n) {

    // Base case
    if (n === 1) {
        ticks++
        return n
    };
    
    // General case
    ticks++
    return n + nthTriangularNumber(n - 1);

}

let n = 9
console.log(nthTriangularNumber(n), ticks);