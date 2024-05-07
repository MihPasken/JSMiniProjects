
let cells = document.querySelectorAll(".cell"); // Linking HTML form fields with a JS file.
let cellsValues = new Array(); // Creating an array for field matrices.
let row = new Array(); // Auxiliary array - row for forming a matrix.

// Creating a matrix of fields.
for (let i = 0; i < cells.length; i++) {
    row.push(cells[i]);
    if (row.length % 3 === 0) {
        cellsValues.push(row);
        row = [];
    };
};

// Informational function for output the cells values "X" or "O"
function get_cells_values() {
    for (let i of cellsValues) {
        for (let j of i) {
            console.log(j.innerText); 
        };
    };
};


// The winning sequences.
const crosses_win_string = "XXX";
const noughts_win_string = "OOO";

function asign_finish() {
    cells.forEach(cell => {
        cell.removeEventListener("click", turn_setter);
        cell.style.backgroundColor = "#D3D3D3";
    });
};

// Checking the draw sequence
function check_draw() {
    let allFilled = true; // Assume all cells are filled
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].innerText === "") {
            allFilled = false; // Found an empty cell, not all cells are filled
            break;
        };
    };
    if (allFilled) {
        console.log("!!! Draw !!!");
        turn_info.innerText = "!!! Draw !!!"
        asign_finish();
    };
};


// Checking the winning sequence.
function check_win(result) {

    // Checking for a win for "X".
    if (result == "XXX") {
        console.log("!!!The crosses win!!!");
        turn_info.innerText = "!!!The crosses win!!!"
        result = "";
        asign_finish();
    };
    
    // Checking for a win for "O".
    if (result === "OOO") {
        console.log("!!!The noughts win!!!");
        turn_info.innerText = "!!!The noughts win!!!"
        result = "";
        asign_finish();
    };
};


// Block of functions for checking the game field.
// Checking values filled in a row.
function check_row() {
    let checkRow = new String();
    for (let i of cellsValues) {
        for (let j of i) {
            checkRow = checkRow + j.innerText;
        };

        check_win(checkRow); // Checking for a winning combination.

        checkRow = "";
    }; 
};

// Checking values filled in a column.
function check_column() {
    let checkColumnString = new String()
    for (let i = 0; i < cellsValues.length; i++) {
        for (let j = 0; j < cellsValues.length; j++) {
            checkColumnString = checkColumnString + cellsValues[j][i].innerText;
        };
        
        check_win(checkColumnString) // Checking for a winning combination.
        
        checkColumnString = "";
    };
};

// Checking the values filled along the diagonals.
function check_diagonal() {
    let checkDiagonalString = new String();
    for (let i = 0; i < cellsValues.length; i++) {
        checkDiagonalString = checkDiagonalString + cellsValues[i][i].innerText;
    };

    check_win(checkDiagonalString);
    checkDiagonalString = "";

    for (let i = 0; i < cellsValues.length; i++) {
        checkDiagonalString = checkDiagonalString + cellsValues[i][cellsValues.length - 1 - i].innerText;
    };

    check_win(checkDiagonalString); // Checking for a winning combination.
    checkDiagonalString = "";
};


// The Main function of determining the move of player "X" or "O". 
function check_status() {
    check_row();
    check_column();
    check_diagonal();
    check_draw();
};

// Auxiliary secondary function "For future developers".
function check_cells() {
    let situation = new Array();
    console.log(cellsValues);
};

// The "Turn block"
let turn = "X"; // The first turn (Usually it's the "X") 
let turn_info = document.getElementById("header").querySelector("h1"); // The first turn (Usually it's the "X") 

// The switching turns function.
function turn_setter() {
    if (this.textContent === "") {
        this.textContent = turn;
        turn = turn === "X" ? "O" : "X"; // Switching the turn.
        turn_info.innerText = `The ${turn} turn!`; // Indicating whose turn it is.
    };

    check_status(); // Checking the state of the game field.
};

// Setting up an event - adding functions for the game field.
cells.forEach(cell => {
    cell.addEventListener("click", turn_setter);
});