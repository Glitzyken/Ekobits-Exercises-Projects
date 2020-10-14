// 1)  countdown
// Write a function called countdown that accepts a number as a parameter and every 1000 milliseconds decrements the value and console.logs it. Once the value is 0 it should log "DONE!" and stop.

// const countdown = (num) => {
// initialize an empty array
// loop over num
// push value at each iterarion to empty array
// use setTimeout to log values of empty array to console

//   let makeNumArr = [];

//   for (let i = 0; i < num; i++) {
//     makeNumArr.push(i);
//     if (i === 0) {
//       makeNumArr.push('Done!')
//     }

//     setTimeout(function () {
//       console.log(makeNumArr.pop());
//     }, i * 1000);
//   }
// };

// countdown(4);

//////////////////////////////////////////////////////////////////////////////////////////////

// 2) randomGame
// Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds and each time that a random number is picked, add 1 to a counter. If the number is greater than .75, stop the timer and return the number of tries it took before we found a number greater than .75.

// const randomGame = () => {
//   // declare a counter variable and set it to 0 initially
//   // every 1 sec, check if random number is greater than .75.
//   // if false, increase counter by 1.
//   // if true, stope timer and return the number of tries

//   let counter = 0;

//   let loop = setInterval(() => {
//     if (Math.round(Math.random() * 100) / 100 > 0.75) {
//       console.log("number of tries is " + counter);
//       clearInterval(loop);
//     } else {
//       console.log("Added 1 to counter");
//       counter += 1;
//     }
//   }, 1000);
// };

// randomGame();

//////////////////////////////////////////////////////////////////////////////////////////////

// 3) isEven
// Write a function called isEven which takes in a number and returns true if the number is even and returns false if it is not

// const isEven = num => {
//   if (num % 2 === 0) {
//    return true
//   } else {
//     return false
//   }
// };

// console.log(isEven(2)); // true
// console.log(isEven(3)); // false

// 4) isOdd
// Write a function called isOdd which takes in a number and returns true if the number is odd and returns false if it is not

// const isOdd = (num) => {
//   if (num % 2 === 1) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(isOdd(3)); // true
// console.log(isOdd(14)); // false

//////////////////////////////////////////////////////////////////////////////////////////////

// 5) isPrime
// Write a function called isPrime which takes in a number and returns true if the number is a prime number (is greater than 1 and can only be divided in whole by itself and 1), otherwise returns false

// const isPrime = num => {
//   for (let i = 2; i < num; i++) {
//     if(num % i === 0) return false;
//   }
//   return num > 1;
// };

// console.log(isPrime(8)); // false
// console.log(isPrime(17)); // true
// console.log(isPrime(2)); // true

//////////////////////////////////////////////////////////////////////////////////////////////

// 6) numberFact
// Write a function called numberFact which takes in a number and a callback and returns the result of the callback with the number passed to it

// const numberFact = (num, fn) => {
//   return fn(num);
// }

// console.log(numberFact(59,isEven)); // false
// console.log(numberFact(59,isOdd)); // true
// console.log(numberFact(59,isPrime)); // true

//////////////////////////////////////////////////////////////////////////////////////////////

// 7) find
// Write a function called find. It should take in an array and a callback and return the first value found in the array that matches the condition.

// const find = (array, fn) => {
//   for (arr of array) {
//     if (fn(arr)) {
//       return arr
//     }
//   }
// }

// console.log(find([8,11,4,27], function(val){return val >= 10})); // 11
// console.log(find([8,11,4,27], function(val){return val === 5})); // undefined

//////////////////////////////////////////////////////////////////////////////////////////////

// 8) findIndex
// Write a function called findIndex. It should take in an array and a callback and return the index of first value found in the array that matches the condition.

// const findIndex = (array, fn) => {
//     for (arr of array) {
//     if (fn(arr)) {
//       return array.indexOf(arr)
//     }
//   }
// }

// console.log(findIndex([8,11,4,27], function(val){return val >= 10})); // 1
// console.log(findIndex([8,11,4,27], function(val){return val === 7})); // undefined