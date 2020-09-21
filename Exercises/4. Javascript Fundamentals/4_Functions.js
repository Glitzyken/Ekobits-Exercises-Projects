// Functions Exercises Part 1 - 3

///////////////////////////// PART 1 ////////////////////////////
// 1) this function takes in two parameters and returns the difference of the two;
// let difference = (input1, input2) => {
//   return input1 - input2;
// };
// console.log(difference(2, 2)); // 0
// console.log(difference(0, 2)); // -2

// 2) this function takes in two parameters and returns the product of the two;
// let product = (input1, input2) => {
//   return input1 + input2;
// };
// console.log(product(2, 2)); // 4
// console.log(product(0, 2)); // 2

// 3) this function takes in one parameter (a number from 1-7) and returns the day of the week (1 is Sunday, 2 is Monday, 3 is Tuesday etc.). If the number is less than 1 or greater than 7, the function should return undefined;
// let printDay = (input) => {
//   let dayNumbers = [1, 2, 3, 4, 5, 6, 7];
//   let days = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];

//   let day;

//   for (let dayNum of dayNumbers) {
//     if (input === dayNum) {
//       day = dayNumbers.indexOf(dayNum);
//     }
//   }

//   return days[day];
// };
// console.log(printDay(7));

// 4) this function takes in one parameter (an array) and returns the last value in the array. It should return undefined if the array is empty.
// let lastElement = (arrInput) => {
//   return arrInput.slice(-1)[0];
//   // return arrInput.length;
// };
// console.log(lastElement([1, 2, 3, 4]));

// 5) this function takes in two parameters (both numbers). If the first is greater than the second, this function returns "First is greater". If the second number is greater than the first, the function returns "Second is greater". Otherwise the function returns "Numbers are equal"
// let numberCompare = (num1, num2) => {
//   if (num1 > num2) {
//     return "First is greater";
//   } else if (num1 < num2) {
//     return "Second is greater";
//   } else {
//     return "Numbers are equal";
//   }
// };
// console.log(numberCompare(1, 1));
// console.log(numberCompare(2, 1));
// console.log(numberCompare(1, 2));

// 6) this function takes in two parameters (two strings). The first parameter should be a word and the second should be a letter. The function returns the number of times that letter appears in the word. The function should be case insensitive (does not matter if the input is lowercase or uppercase). If the letter is not found in the word, the function should return 0.

let singleLetterCount = (word, letter) => {
  let letterCount = 0;

  for (let eachLetter of word) {
    if (
      eachLetter === letter.toLowerCase() ||
      eachLetter === letter.toUpperCase()
    ) {
      letterCount += 1;
    }
  }

  return letterCount;
};

console.log(singleLetterCount("Amazing", "A"));
