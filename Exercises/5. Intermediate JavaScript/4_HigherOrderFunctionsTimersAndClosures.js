// 1)  countdown
// Write a function called countdown that accepts a number as a parameter and every 1000 milliseconds decrements the value and console.logs it. Once the value is 0 it should log "DONE!" and stop.

const countdown = (num) => {
  let makeNumArr = [];

  for (let i = 0; i < num; i++) {
    makeNumArr.push(i);
    if (i === 0) {
      makeNumArr.push('Done!')
    }

    setTimeout(function () {
      console.log(makeNumArr.pop());
    }, i * 1000);
  }
};

countdown(4);
