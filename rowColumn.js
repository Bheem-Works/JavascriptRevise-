
// Creating the row and the colums

// intializing the varaibles 

function fourMakes(move){
  let row = 6;
  let columns = 5; 
  let board = Array(row).fill().map(()=>Array(columns).fill('-'));

  for(let moveIndex = 0; moveIndex < move.length; moveIndex++){
    let player = moveIndex % 2 === 0 ? "Y" : "X";
    let cols = move[moveIndex];

    for(let rowBehind = row - 1; rowBehind >= 0; rowBehind--){
      if(board[rowBehind][cols] === '-'){
        board[rowBehind][cols] = player;
      }
    }
  }
  return board;
}

// showing the outputs 
function showOutput (board){
  for(let boardOut of board){
    console.log(boardOut);
  }
}
const outputOne = [5,4,2,1];

showOutput(fourMakes(outputOne))
