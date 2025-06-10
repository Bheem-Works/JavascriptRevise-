
// Find the maximum number by using the arrays methods;

let value = [1,2,3,4,5];
let maximum = value[0];

for(let i = 0; i < value.length; i++) {
  if(value[i] > maximum) {
    maximum = value[i];
  }
}
console.log(maximum);
