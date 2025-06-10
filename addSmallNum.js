// Add the any tow beginning smallest number..
// the output should be [1,4,5,3] > 1 + 3 = 4;

function smallestNum (number) {
 const smallValueAdd = number.sort((a,b) => a - b);
  return smallValueAdd[0] + smallValueAdd[1];
}

console.log(smallestNum([2,3,1]));

const smallValue = num => num.sort((a,b)=> a -b ).slice(0,2).reduce((x,y) => x + y);
