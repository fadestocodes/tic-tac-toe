//---------------------------------------------------------------------//
// Creates the Board and marks the spot on the board //

function Gameboard(){
  const board = [];
  const row = 3;
  const column = 3;

  const boardContainer = document.createElement("div");
  boardContainer.classList.add("board-container");

  for (let i = 0; i<row ; i++){
    board[i] = [];
    for (let j=0 ; j<column ; j++){
      board[i][j]=0;
      const cellContainer = document.createElement("div");
      cellContainer.classList.add("cell-container");
      cellContainer.setAttribute("id", `cell${i}-${j}`);


    };
  };
  console.log(board);


  

  const markSpot = (rowIndex, colIndex, activePlayer) => {
    if (board[rowIndex][colIndex] === 0){
      board[rowIndex][colIndex] = activePlayer.marker;
      console.log(board);

    }
    else if (board[rowIndex][colIndex] != 0){
      console.log("Invalid Move");
    }   
  };


  // function to get the value of a cell //

  const cellValue = (rowIndex, colIndex) =>  board[rowIndex][colIndex];

  // return of the factory function Gameboard() //
  return {
    board,
    row,
    column,
    markSpot,
    cellValue
  }
}
//---------------------------------------------------------------------//

// Factory function for creating different players with it's marker //

function Player(name, marker){
  return {
    name: name,
    marker:marker
  };
};

//---------------------------------------------------------------------//

// Game logic 

function Game(){
  const player1 = Player("Andrew", "X");
  const player2 = Player("Drew", "&");
  const playerList = [player1, player2];
  let activePlayer = playerList[0];
  const switchPlayer = () => activePlayer = activePlayer === playerList[0] ? playerList[1] : playerList[0];
  const getActivePlayer = () => activePlayer;

 

  const checkGameOver = () => {
    let gameOverStatus = false;
    let winner;
    // check if any rows are a win // 
    for (let i=0 ; i<gameboard.row ; i++ ){
      if ((gameboard.board[i][0]===gameboard.board[i][1] && gameboard.board[i][1] === gameboard.board[i][2]) && (gameboard.board[i][0] != 0)){
        gameOverStatus = true;
        if (gameOverStatus && gameboard.board[i][0] === player1.marker){
          winner = player1;
          console.log(`The Winner is ${player1.name}`)
        }
        else if (gameOverStatus && gameboard.board[i][0] === player2.marker){
          winner = player2;
          console.log(`The Winner is ${player2.name}`)
        }


        break;
      }
      // check column win 
      else if ((gameboard.board[0][i]===gameboard.board[1][i] && gameboard.board[1][i] === gameboard.board[2][i]) && (gameboard.board[0][i] != 0)){
        gameOverStatus = true;

        if (gameOverStatus && gameboard.board[0][i] === player1.marker){
          winner = player1;
          console.log(`The Winner is ${player1.name}`)
        }
        else if (gameOverStatus && gameboard.board[0][i] === player2.marker){
          winner = player2;
          console.log(`The Winner is ${player2.name}`)
        }

        break;
      }
    }
      // check for diagonal win
    if ((gameboard.board[0][0] === gameboard.board[1][1] && gameboard.board[1][1] === gameboard.board[2][2] && gameboard.board[0][0] != 0) || (gameboard.board[0][2] === gameboard.board[1][1] && gameboard.board[1][1] === gameboard.board[2][0] && gameboard.board[0][2] != 0))  {
    gameOverStatus = true;
       
       if (gameOverStatus && gameboard.board[1][1] === player1.marker){
        winner = player1;
        console.log(`The Winner is ${player1.name}`)
      }
      else if (gameOverStatus && gameboard.board[1][1] === player2.marker){
        winner = player2;
        console.log(`The Winner is ${player2.name}`)
      }
    }

    // check for tie if board is all full with no winner //
    if (!gameboard.board[0].includes(0) && !gameboard.board[1].includes(0) && !gameboard.board[2].includes(0) ){
      console.log("It's a tie!")
    }
      
    if (gameOverStatus){
      // console.log("We have a winner"); 
      }
    };

  return {
    activePlayer,
    getActivePlayer,
    switchPlayer,
    checkGameOver
    };
  
};

//---------------------------------------------------------------------//

// Calling functions to "play" and test the game

const gameboard = Gameboard();
const game = Game();
gameboard.markSpot(0,0, game.getActivePlayer());
game.checkGameOver();
game.switchPlayer();
gameboard.markSpot(0,2,game.getActivePlayer());
game.checkGameOver();
game.switchPlayer();
gameboard.markSpot(0,1, game.getActivePlayer());
game.checkGameOver();
game.switchPlayer();
gameboard.markSpot(1,0, game.getActivePlayer());
game.checkGameOver();
game.switchPlayer();
gameboard.markSpot(1,2, game.getActivePlayer());
game.checkGameOver();
game.switchPlayer();
gameboard.markSpot(1,1, game.getActivePlayer());
game.checkGameOver();
game.switchPlayer();
gameboard.markSpot(2,0, game.getActivePlayer());
game.checkGameOver();
game.switchPlayer();
gameboard.markSpot(2,2, game.getActivePlayer());
game.checkGameOver();
game.switchPlayer();
gameboard.markSpot(2,1, game.getActivePlayer());
game.checkGameOver();
console.log(gameboard.cellValue(2,2));







