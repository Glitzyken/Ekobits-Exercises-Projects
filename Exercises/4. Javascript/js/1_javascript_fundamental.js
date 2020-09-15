// FOR JAVASCRIPT FUNDAMENTAL EXERCISE PART III
const isItOverZeroPointFive = () => Math.round(Math.random() * 10) / 10;

if (isItOverZeroPointFive() > 0.5) {
  console.log("Over 0.5");
} else {
  console.log("Under 0.5");
}

console.log(isItOverZeroPointFive());
