// To find the mathing words. 

function wordsSearch(query,string){
  let result = [];
  for(let i = 0; i < string.length; i++) {
    if(string[i].toLowerCase().includes(query.toLowerCase())){
      result.push(string[i]);
    }
  }

  if(result.length === 0) {
    return [];
  } 
  return result;
}
console.log(wordsSearch('im',['aming','vim','limbe','miru']));
