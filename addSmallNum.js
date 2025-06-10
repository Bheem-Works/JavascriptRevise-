// Adding the smallest numbers; 


function smallestNumber(num) {
  const sortNum = num.sort((a,b) => a - b ); // Taking the short numbers;
  return sortNum[0] + sortNum[1];
}

console.log(smallestNumber([3,5,8,2]));

const sortNum = number => number.sort((a,b) => a -b).slice(0,2).reduce((x,y)=> x + y); 
console.log(sortNum([2,4,2]));
