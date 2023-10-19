document.addEventListener('DOMContentLoaded', function () {
    const cells = document.querySelectorAll('[data-cell]');
    const message = document.querySelector('[data-message]');
    const restartButton = document.querySelector('[data-restart]');

    let currentPlayer = 'X';
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
    let gameActive = true;

    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    function checkWinner() {
        for (const combination of winningCombinations) {
            const [a, b, c] = combination;
            if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
                gameActive = false;
                message.innerText = `${currentPlayer} wins!`;
            }
        }

        if (!gameBoard.includes('') && gameActive) {
            gameActive = false;
            message.innerText = "It's a draw!";
        }
    }

    function handleCellClick(e) {
        const cell = e.target;
        const cellIndex = cell.getAttribute('data-cell');

        if (gameBoard[cellIndex] === '' && gameActive) {
            cell.textContent = currentPlayer;
            gameBoard[cellIndex] = currentPlayer;
            checkWinner();
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }

    function restartGame() {
        gameBoard = ['', '', '', '', '', '', '', '', ''];
        gameActive = true;
        currentPlayer = 'X';
        message.innerText = '';
        cells.forEach(cell => cell.textContent = '');
    }

    cells.forEach(cell => cell.addEventListener('click', handleCellClick));
    restartButton.addEventListener('click', restartGame);
});
