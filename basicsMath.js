// OutPut should be > 
// "1plus2plus3plus4"  --> "10"
// "1plus2plus3minus4" -->  "2"


// NOte : Eval is used to calculate even the number in the string; 
// > replace([/a-z]/gi, '');


function calculation(str){
  // To convert it to the arrays and split it. 
  let replaceAll = str.replaceAll("plus",'+').replaceAll("minus",'-');
  let sum = eval(replaceAll);
  return sum;
}

const outputOne = "1plus2plus3plus4";
const outputTwo = "1plus2plus3minus4";
console.log(calculation(outputOne));
console.log(calculation(outputTwo))
