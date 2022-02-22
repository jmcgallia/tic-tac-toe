/* Create classes, objects, modules for the game */

// The board module
const Game = (() => {
    /* The gameboard is a 2d array [3][3] of divs
    which have 'X', 'O', or '' in them.

    Array.from takes an array-like object and 
    does the map function in the second argument to it.
    You don't have to use 'new' for Array apparently.. */
    board = Array.from(new Array(3), () => new Array(3));

    // Populate the board array with appropriate divs
    cells = Array.from(document.querySelectorAll('.cell'));
    let cellCounter = 0;
    for (let i in [0,1,2]) {
        for (let j in [0,1,2]) {
            let currentCell = cells[cellCounter++];
            // Add the cell to the 2d array
            board[i][j] = currentCell;
            // Add the listener for this cell
            currentCell.addEventListener("click", onCellClicked);

        }
    }

    // The event for when a cell is clicked on
    function onCellClicked() {
        console.log("A cell was clicked on!");
    }


    return {board};
})()

