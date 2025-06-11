// Remove the duplicate  
 let numberArrays = [1,2,3,1,2,3];
 let removeDuplicate = [...new Set(numberArrays)];
console.log(removeDuplicate);

// By using the Arrays Loops methods; 
function duplicateFind(num){
  let arrNum = [...num]; // copying the passig arrays numbers;
  let unique = []; // for store the value;
  for(let i = 0; i < num.length; i++) { 
    console.log('arrNum',arrNum); // the arrays nums; 
    const holdData = arrNum.indexOf(num[i]); // to get the indexof the arrNum;
    console.log('holdData',holdData);
    console.log('i',i); // to get the index
    // Note = Index of give the continue value if the number is not matching, if it match with the previous it will start again.
    if(arrNum.indexOf(num[i]) === i) { // if the index matches with arr index 
      unique.push(num[i]); // if it matched then push.
    }
  }
  return unique;
}

let numArr = [1,2,1,2,3];
console.log(duplicateFind(numArr));

// Find index value numbers of the matching; 
let arr = [1,2,3,2,5]; // collection of the values;
let valueFind = 2;

let indexArr = arr
  .map((val,idx)=> val === valueFind ?idx : -1) // if it match then give the idx index. if it not change the value to the -1. invalid; 
  .filter(idx => idx !== -1); // if it match then send it it is not then remove it. 

console.log(indexArr);


// finding duplicate value from using the filter methods 
function filterValue(findDuplicate){
 return findDuplicate.filter((current,idx)=>{
   return findDuplicate.indexOf(current) === idx;
  })
}
console.log(filterValue(numArr));
