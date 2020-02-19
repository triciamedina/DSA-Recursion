const countingSheep = function(sheepCount) {
    // Base case
    if (sheepCount < 1) {
        return 'All sheep jumped over the fence';
    }
    // General case
    return `${sheepCount}: Another sheep jumps over the fence ${countingSheep(--sheepCount)}` ;

}

let sheepCount = 3;
console.log(countingSheep(sheepCount));