// Creating a varaibles 
let sortingAlphabet = "bhim";
let newSorting = new Set(sortingAlphabet); // new set helps to convert the value to the arraysl
// to convert to the arrays; 
let arraySpread = [...newSorting];
console.log(arraySpread.sort());

// To find the ages 
function age(x,y){
  const brother = x/(y-1); // To help get the y value; output // 3/5 
  const addedXandY = brother + x; // adding the value of the y with the brother age; 
  return addedXandY;
}
console.log(age(3, 6))


