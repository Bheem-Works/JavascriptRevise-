
// Find the maximum number by using the arrays methods;

let value = [1,2,3,4,5];
let maximum = value[0];

for(let i = 0; i < value.length; i++) {
  if(value[i] > maximum) {
    maximum = value[i];
  }
}
console.log(maximum);

// finding the smallest number 
let minVal = [3,2,1,3,4,5];
let minimum = value[0];

for(let i = 0; i < minVal.length; i++) {
  if(minVal[i] < minimum) { // Nothing is greater then the 1 that's why it just give the value; 
  minimum = minVal[i];
  }
}
console.log(minimum);
