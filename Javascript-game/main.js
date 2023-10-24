const cells = document.querySelectorAll('[data-cell]');
const status = document.getElementById('status');
const resetButton = document.getElementById('reset-button');
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function handleCellClick(event) {
    const cell = event.target;
    const cellIndex = Array.from(cells).indexOf(cell);

    if (gameBoard[cellIndex] !== '' || !gameActive) return;

    gameBoard[cellIndex] = currentPlayer;
    cell.innerText = currentPlayer;
    cell.classList.add(currentPlayer);

    if (checkWin() || checkDraw()) {
        gameActive = false;
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        status.innerText = `${currentPlayer}'s turn`;
    }
}

function checkWin() {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const condition of winConditions) {
        const [a, b, c] = condition;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            status.innerText = `${currentPlayer} wins!`;
            alert(`${currentPlayer} wins!`)
            return true;
        }
    }

    return false;
}

function checkDraw() {
    if (gameBoard.every((cell) => cell !== '')) {
        status.innerText = "It's a draw!";
        return true;
    }
    return false;
}

function resetGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
    status.innerText = `${currentPlayer}'s turn`;
    cells.forEach((cell) => {
        cell.innerText = '';
        cell.classList.remove('X', 'O');
    });
}

cells.forEach((cell) => {
    cell.addEventListener('click', handleCellClick);
});

resetButton.addEventListener('click', resetGame);
