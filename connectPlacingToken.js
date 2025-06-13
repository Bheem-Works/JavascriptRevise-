
// find the out the grid by using the nested loops

let rows = 6;
let cols = 7;
let boards = [];


for(let r = 0; r < rows; r++){
  let row = [];
  for(let c = 0; c < cols; c++){
    row.push('-');
  }
    boards.push(row);
}

// output
for(let r = 0; r < rows; r++){
  console.log(boards[r])
}

