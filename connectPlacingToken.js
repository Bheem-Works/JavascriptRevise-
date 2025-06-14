// Connects four placing tokens; 
// Questions : A list of integers representing the columns (from 0 to 6) where tokens are dropped, in order. 
// The first player is yellow (Y), followed by red (R), alternating turns.

function moveFour(move){
  let rows = 6;
  let cols = 7;
  let board = Array(rows).fill().map(()=>Array(cols).fill('-'))

  for(let moveIdx = 0; moveIdx < move.length; moveIdx++){
    let player = moveIdx % 2 === 0 ? "X" : "Y"
    let col = move[moveIdx];

    for(let row = rows-1; row >= 0; row--){
      if(board[row][col] === '-'){
        board[row][col] = player;
        break;
      }
    }
  }
  return board;
}

function printBoard(board){
  for(let output of board){
    console.log(output);
  }
}

const moveOne = [0,1,2,4,5];
console.log(moveFour(moveOne));
