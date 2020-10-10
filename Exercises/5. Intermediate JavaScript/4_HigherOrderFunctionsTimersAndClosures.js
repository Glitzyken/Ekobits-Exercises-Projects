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

// 3) isEven
// Write a function called isEven which takes in a number and returns true if the number is even and returns false if it is not

const isEven = (num) => {
  if (num % 2 === 0) {
    console.log('True')
  } else {
    console.log('False')
  }
};

isEven(2); // true
isEven(3); // false
