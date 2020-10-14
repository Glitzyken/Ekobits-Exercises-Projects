// 1) Write a function called rotate which takes an array and a number, and moves each element however many spaces the number is to the right. For the value at the end of the array, rotate should move it back to the beginning.

// function rotate(arr, count) {
// Make a copy of the array
// loop through the array
// pop the last index of the array and store it in a variable and push the popped array to the front of the array
// return the array

//   let clonedArr = arr.slice();

//   for (let i = 0; i < count; i++) {
//     if (count > 0) {
//       let lastIndex = clonedArr.pop();
//       clonedArr.unshift(lastIndex);
//     }
//   }
//   return clonedArr;
// }

// console.log(rotate([1, 2, 3], 1)); // [3,1,2]
// console.log(rotate([1, 2, 3], 2)); // [2,3,1]
// console.log(rotate([1, 2, 3], 3)); // [1,2,3]

//////////////////////////////////////////////////////////////////////////////////////////////

// 2) Write a function called makeXOGrid which takes in two parameters, rows and columns, and returns an array of arrays with the number of values in each subarray equal to the columns parameter and the number of subarrays equal to the rows parameter. The values in the sub-arrays should switch between "X" and "O".

const makeXOGrid = (rows, columns) => {
  // initialize an empty array
  // initialize an empty subArray
  // initialize two variables and assign them to the values of 'X' and 'O' respectively
  // doing a for loop, at each iteration, push 'X' and 'O' values to subArray however many times the number provided as argument to the second parameter
  // doing another for loop, at each iteration, push subArray to array however many times the number provided as argument to the first parameter
  //   return array

  let array = [];
  let subArray = [];
  let xoArray = ["X", "O", "X", "O", "X", "O", "X", "O"];
  //   let x = "X";
  //   let o = "O";

  for (let i = 0; i < columns; i++) {
    subArray.push(xoArray[i]);
  }

  for (let j = 0; j < rows; j++) {
    array.push(subArray);
  }
  return array;
};

// console.log(makeXOGrid(1, 4));

/*/
[["X","O","X","O"]]
/*/

// console.log(makeXOGrid(3, 2));

/*/
[["X","O"],["X","O"],["X","O"]]
/*/

console.log(makeXOGrid(3, 3));
/*/
[["X","O","X"],["O","X","O"],["X","O","X"]]
/*/
