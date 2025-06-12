
  // Recursive function > Recursive function is used to call it self. Recursive fuction can call it self. 

function stop(n){
  console.log(n);
  if(n > 0) {
    stop(n-1);
  }
}
stop(9);

// Fabinacii Sequence; 
function Fabinacii(n){
  let fib = [0,1];
  for(let i = n; i < 2; i++){
    fib[i] = fib[i-1] + fib[i-2];
  }
  return fib;
}
