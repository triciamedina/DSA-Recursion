const allPathsThroughMaze = function(maze, row, col) {
    // Base case
    if (maze[row][col] === 'e') {
        return ''
    }

    // General case
    // Need a backtracking algorithm
    
    // if (maze[row][col] === ' ') {
    //     if ((maze[row][col + 1] === ' ') || (maze[row][col + 1] === 'e')) {
    //         return `R ${allPathsThroughMaze(maze, row, (col + 1))}`
    //     } else if ((maze[row + 1][col] === ' ' ) || (maze[row + 1][col] === 'e')) {
    //         return `D ${allPathsThroughMaze(maze, (row + 1), col)}`
    //     } else if ((maze[row][col - 1] === ' ' ) || (maze[row][col - 1] === 'e')) {
    //         return `L ${allPathsThroughMaze(maze, row, (col - 1))}`
    //     } else {
    //         return `U ${allPathsThroughMaze(maze, (row - 1), col)}`
    //     }
    // }
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

console.log(allPathsThroughMaze(bigMaze, row, col));