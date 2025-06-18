// This is the kata 6 problems; The output should be like this. 
// [a-z] = a:1, b:2; [A-Z] = A:1, B: 2; [1-9] = 1 : 1, 2 : 2; 

function searchLetter(s){
  let convertString = String(s);
  let count = 0; // to change it  
  for(let i = 0; i < convertString.length; i++){
    // use the regx and the test methods; 
    if(/[a-z]/.test(convertString[i])){
    count++;
    console.log("This is working");
    console.log(count);
    } else if(/[A-Z]/.test(convertString[i])) {
      console.log("This is the seconds if")
      count +2;
      console.log(count);
    } else if(/[0-9]/.test(convertString[i])){
      console.log("This is the third if statement")
      count ++;
      console.log(count);
    } else {
      return 0; 
    }
  }
}

//const setDemo  = ['hellomom']; const setDemo  = ['HELLOMOM']; 
const setDemo  = ['12345']; 
searchLetter(setDemo);
