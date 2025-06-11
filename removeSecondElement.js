
// Remove every seconds elements 

function removeSecond(item){
  let result = [];
  for(let i = 0; i < item.length; i++) { // matching the index value;
    // [1,2,3,4] (index[0,1,2,3] == 0 %2 == 0) true so push it. if the index is equal to the 2 and 0 then push; 
    if(i%2 === 0) {
      result.push(item[i]);
    }
  }
  return result;
}
console.log(removeSecond([1,2,3,4]));

// By using the filter methods 
 const filterRemove = remove => remove.filter(_,idx => idx % 2 === 0);
