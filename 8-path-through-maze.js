const pathThroughMaze = function(maze, row, col) {
    // Base case
    if (maze[row][col] === 'e') {
        return ''
    }

    // General case
    if (maze[row][col] === ' ') {
        if ((maze[row][col + 1] === ' ') || (maze[row][col + 1] === 'e')) {
            return `R ${pathThroughMaze(maze, row, (col + 1))}`
        } else if ((maze[row + 1][col] === ' ' ) || (maze[row + 1][col] === 'e')) {
            return `D ${pathThroughMaze(maze, (row + 1), col)}`
        } else if ((maze[row][col - 1] === ' ' ) || (maze[row][col - 1] === 'e')) {
            return `L ${pathThroughMaze(maze, row, (col - 1))}`
        } else {
            return `U ${pathThroughMaze(maze, (row - 1), col)}`
        }
    }
}

let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let bigMaze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

let row = 0;
let col = 0;

console.log(pathThroughMaze(bigMaze, row, col));