// // This is the kata 6 problems; The output should be like this. 
// // [a-z] = a:1, b:2; [A-Z] = A:1, B: 2; [1-9] = 1 : 1, 2 : 2; 

// function searchLetter(s){
//   // converting input to the string; 
//   const string = String(s);
//   const counts = {}; // for storing the count value; 

//   for(let i = 0; i < string.length; i++){
//     const char = string[i];
//     if(/[a-zA-Z0-9]/.test(char)){ // checking all the character match with the regx; 
//       if(!counts[char]){ // If it is not included first then add to it;
//       counts[char] = 1; // Set it to the one; 
//       } else {
//         counts[char]++;
//       }
//     }
//   }

//   // showing the index numbers; 
//   for(let key in counts) {
//     console.log(`${key}: ${counts[key]}`);
//   }
// }

// searchLetter("hellomom");
// searchLetter("HELLOMOM");
// searchLetter('12345');


// Solving the two questions; 

function letterToNumbers(s){
  let total = 0; 

  for(let i = 0; i < s.length; i++){
    const char = s[i];
    
    if(/[a-z]/.test(char)){
      total += char.charCodeAt(0) - 96; // To get the constonant value and increment by once a time; 
    }else if(/[A-Z]/.test(char)){
      total += char.charCodeAt(0) - 64 * 2; // to get the alphabetic value and increment twice a time; 
    } else if(/[0-9]/.test(char)){
      total += parseInt(char);
    } else {
      return total += 0;
    }
  }
  return total;
}
