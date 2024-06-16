# 🎮 Tic-Tac-Toe Game Documentation 🎲

## 🌟 Overview

This Tic-Tac-Toe game is a fun, simple, browser-based game implemented using HTML, CSS, and JavaScript. The game allows two players to play Tic-Tac-Toe, taking turns to mark spaces in a 3x3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game 🏆. The game interface updates to show which player's turn it is and announces the winner once the game concludes.

## 📚 Features

- **Dynamic Grid Interaction**: Players interact with the game grid by clicking on cells within a 3x3 matrix. 🖱️
- **Turn Indication**: The game displays which player's turn it is ("X" or "O"). 🔄
- **Win Detection**: The game automatically detects and announces a win or tie and highlights the winning sequence. 🔍
- **Responsive Design**: The game is fully responsive and can be played on desktop and mobile devices. 📱💻

## 🏗️ HTML Structure

The HTML file contains the basic structure of the game:

- A `div` element with class `header` displays the current player's turn. 🕹️
- A `div` element with class `game-board` contains individual cells (`div` elements with class `cell`) that players can click to make a move.

## 🎨 CSS Styling

The CSS file defines the layout and styling of the game board and cells:

- The game board is styled as a grid with three columns and three rows.
- Cells have a defined border and change color when hovered over to improve user interaction.

## 🧠 JavaScript Logic

The game logic is implemented in a JavaScript file that handles user interactions and game mechanics:

### Core Functions

- **`turn_setter()`**: Manages player turns, updates the cell based on the player's action, and calls the `check_status()` function to determine if the game has been won.
- **`check_status()`**: Calls functions to check rows, columns, and diagonals for a winning combination.
- **`check_win(result)`**: Checks if the provided string indicates a win and updates the game status accordingly.

### Win Checking

- **`check_row()`**, **`check_column()`**, **`check_diagonal()`**: These functions check for winning combinations in rows, columns, and diagonals, respectively.

### Event Handling

- Event listeners are added to each cell to handle click events, allowing players to make moves.

## 🚀 Installation and Setup

1. **Clone the repository**:

2. **Open `index.html` in a browser** to start playing the game. 🌐

## 🌱 Future Developments

- Implement an AI opponent so that a player can play against the computer. 🤖
- Add a scoreboard to track wins, losses, and ties. 📊
- Provide options to choose symbols and first player. 🔧

For developers looking to extend or modify the game, see the comments in the JavaScript file for detailed explanations of the functions and game logic. 🛠️

