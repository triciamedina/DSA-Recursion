let ticks = 0;
const powerCalculator = function(base, exponent) {
    // Bouncer pattern
    if (exponent < 0) {
        ticks ++
        return 'exponent should be >= 0';
    };

    // Base case
    if (exponent === 0) {
        ticks++
        return 1
    };

    // General case
    if (exponent > 0) {
        if (exponent === 1) {
            ticks++
            return base
        };
        ticks++
        return base * powerCalculator(base, --exponent);
    };
}

let base = 100;
let exponent = 2;
console.log(powerCalculator(base, exponent), ticks);
