const statusDisplay = document.querySelector('.game--status');
var click = 0;

var tttGameCount = 0;
var tttP1Count = 0;
var tttP2Count = 0;
var tttDrawCount = 0;


let gameActive = true;
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];

function winningMessage() {
    if(currentPlayer =="X"){
        return "Player 1 has won!"}
    else{
        return "Player 2 has won!"
    }
    }
     
const drawMessage = () => `Game ended in a draw!`;
function currentPlayerTurn() {
    if(click == 0){
        return "Start"
    }
    if(currentPlayer =="X"){
        return "Player 1's Turn"}
    else{
        return "Player 2's Turn"
    }
};

statusDisplay.innerHTML = currentPlayerTurn();

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleCellPlayed(clickedCell, clickedCellIndex) {
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
    click ++
    if(click == 1){
        tttGameCount++
        document.querySelector(".increment-gameTTT").innerHTML = tttGameCount
    }
}

function handlePlayerChange() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerHTML = currentPlayerTurn();
}

function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break
        }
    }

    if (roundWon) {
        statusDisplay.innerHTML = winningMessage();
        if(currentPlayer == "X"){
        tttP1Count++
        document.querySelector(".increment-p1countTTT").innerHTML = tttP1Count
        }
        else if(currentPlayer == "O"){
            tttP2Count++
            document.querySelector(".increment-p2countTTT").innerHTML = tttP2Count
            }
        gameActive = false;
        return;
    }

    let roundDraw = !gameState.includes("");
    if (roundDraw) {
        statusDisplay.innerHTML = drawMessage();
        gameActive = false;
        tttDrawCount++
        document.querySelector(".increment-drawcountTTT").innerHTML = tttDrawCount
        return;
    }
    if(roundWon == true || gameActive == false){
        click =0
    }
    handlePlayerChange();
}

function handleCellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }

    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();
}

function handleNewGame() {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
    click = 0
}

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.game--restart').addEventListener('click', handleNewGame);



function newGame() {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = "Player 1's Turn";
    click = 0;
    // tttGameCount = 0;
    // tttP1Count = 0;
    // tttP2Count = 0;
    // tttDrawCount = 0;
    // document.querySelector(".increment-gameTTT").innerHTML = tttGameCount
    // document.querySelector(".increment-p1countTTT").innerHTML = tttP1Count
    // document.querySelector(".increment-p2countTTT").innerHTML = tttP2Count
    // document.querySelector(".increment-drawcountTTT").innerHTML = tttDrawCount
    // clear the game board
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
      cell.innerHTML = "";
    });
  }

  function restartGame() {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = "Player 1's Turn";
    click = 0;
    tttGameCount = 0;
    tttP1Count = 0;
    tttP2Count = 0;
    tttDrawCount = 0;
    document.querySelector(".increment-gameTTT").innerHTML = tttGameCount
    document.querySelector(".increment-p1countTTT").innerHTML = tttP1Count
    document.querySelector(".increment-p2countTTT").innerHTML = tttP2Count
    document.querySelector(".increment-drawcountTTT").innerHTML = tttDrawCount
    // clear the game board
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
      cell.innerHTML = "";
    });
  }
  




