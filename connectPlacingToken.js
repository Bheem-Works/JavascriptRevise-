// code wars kata 6 problems; 

// Creating a function 
function moveFour(move){
  // create a varible for the row and teh columns and the boards to store there value; 
  let rows = 6;
  let columns = 7;
  let boards = Array(rows).fill().map(()=>Array(columns).fill('-'));

  // going to the loops through
  for(let moveIndex = 0; moveIndex < move.length; moveIndex++){
    let player = moveIndex % 2 === 0 ? "Y" : "X"; // if the index number can be divided by the two then return the output x and y 
    let cols = move[moveIndex] // to move the index of the move number to get the switch; 

    for(let rowBottom = rows-1; rowBottom >= 0; rowBottom--){
      if(boards[rowBottom][cols] === '-') // then it will give hte output of the player 
        // we have to add the player ;
        boards[rowBottom] [cols] = player;
      break; // after the matching one condition the loops will be break; 
    }
  }
  // returning the boards; 
  return boards;
}

// to show the output in the console 
function outputShow(boards){
  for(let boardsShow of boards){
    // get the value of the boardsShow; 
    console.log(boardsShow);
  }
}

// to set the add the value and input ;
const moveOne = [0,2,3,4];

// to set it to the functions '

outputShow(moveFour(moveOne));
