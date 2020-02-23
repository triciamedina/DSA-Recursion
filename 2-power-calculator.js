const powerCalculator = function(base, exponent) {
    // Bouncer pattern
    if (exponent < 0) {
        return 'exponent should be >= 0';
    };

    // Base case
    if (exponent === 0) {
        return 1
    };

    // General case
    if (exponent > 0) {
        if (exponent === 1) {
            return base
        };
        
        return base * powerCalculator(base, --exponent);
    };
}

let base = 3;
let exponent = 2;
console.log(powerCalculator(base, exponent));
