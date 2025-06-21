// find the array through the index;

function findArray(arr1, arr2) {
  let showIndexResult = []; // For store the index value of the arra1;

  for (let i = 0; i < arr2.length; i++) {
    // Get the value of the arr2;
    let index = arr2[i]; // Storing the index.
    if (index >= 0 && index < arr1.length) {
      // get the value of the arr2;
      // to push the index value;
      const pushIndex = arr1[index];
      // push it to the showIndexResult;
      showIndexResult.push(pushIndex);
    }
  }
  return showIndexResult;
}

const forArrayOne = [1, 2, 1, 3, 1, 4, 1];
const indexOne = [1, 3];
// pushing it to the console, the varaibles names who's storing the arrays;
console.log(findArray(forArrayOne, indexOne));
