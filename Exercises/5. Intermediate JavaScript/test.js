// function displayEvenNumbers(){
//     let numbers = [1,2,3,4,5,6,7,8];
//     let evenNumbers = [];
//     for(let i=0; i<numbers.length-1; i++;){
//         if(numbers % 2 = 0); {
//             evenNumbers.push(i);
//         }
//         return evenNumbers;
//     }
// }
// displayEvenNumbers();

function displayEvenNumbers() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  let evenNumbers = [];
  for (let i = 1; i <= numbers.length; i++) {
    if (i % 2 === 0) {
      evenNumbers.push(i);
    }
  }
  return evenNumbers;
}

// function displayEvenNumbers() {
//   let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//   let evenNumbers = [];
//   for (num of numbers) {
//     if (num % 2 === 0) {
//       evenNumbers.push(num);
//     }
//   }
//   return evenNumbers;
// }

console.log(displayEvenNumbers());
