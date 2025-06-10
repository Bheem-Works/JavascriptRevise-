// To find the mathing words. 

function wordsSearch(query,string){
  let result = []; // For store the value;
  for(let i = 0; i < string.length; i++) { // to go the loop throught from the query;
    if(string[i].toLowerCase().includes(query.toLowerCase())){ // converting the string tot he lowercase and the comparing if the 
      // stirng aso includes the lowercase; 
      result.push(string[i]); // if it ise then push the result;
    }
  }

  if(result.length === 0) { // if there  is no any result then return 0;
    return []; 
  } 
  return result;
}
console.log(wordsSearch('im',['aming','vim','limbe','miru']));


// Seconds way;
function searchWord(word,string){ // passing the value through the parameters 
  const quote = string.filter(item => item.toLowerCase().includes(word.toLowerCase())) // if it includes then return.
  //if not then don't return.
 return string.length ? quote : [];
}
