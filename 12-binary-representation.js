const binaryRepresentation = function(integer) {
    // Base case
    if (integer === 0) {
        return integer;
    };

    if (integer === 1) {
        return integer;
    };

    // General case
    return `${binaryRepresentation(Math.floor(integer / 2))}${integer % 2}` ;
}

let integer = 25;
console.log(binaryRepresentation(integer));