// Write a function called rotate which takes an array and a number, and moves each element however many spaces the number is to the right. For the value at the end of the array, rotate should move it back to the beginning.

function rotate(arr, count) {
  let copiedArr = arr.splice();
  let rotatedArr = [];

  for (num of copiedArr) {
  }
}

console.log(rotate([1, 2, 3], 1)); // [3,1,2]
console.log(rotate([1, 2, 3], 2)); // [2,3,1]
console.log(rotate([1, 2, 3], 3)); // [1,2,3]
