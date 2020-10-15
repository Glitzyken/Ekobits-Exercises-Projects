// Part 1
// 1. Add the necessary code to wait for the DOM to load to make sure that anything you manipulate in the DOM has loaded. You can do this either using window.onload or adding an event listener for DOMContentLoaded.

window.onload = () => {
  console.log("page is fully loaded");
};

// 2. Replace the text "Change me" with "Hello World!".
document.querySelector("#change_heading").innerText = "Hello World!";

// 3. When a user hovers over one of the colored boxes change the text to display the color that is being hovered over.
let text = document.querySelector(".selected");
let boxes = document.querySelectorAll("section div");

boxes.forEach((e) => {
  e.addEventListener("mouseover", (event) => {
    colorName = event.target.getAttribute("class");
    text.innerText = colorName;
  });
});

// 4. Create a new div element.
let newDiv = document.createElement("div");

// 5. Give your new div a class of purple and style it so that it has a background color of purple.
newDiv.style.backgroundColor = "purple";

// 6. Append your new div to the page to the section tag.
document.querySelector("section").appendChild(newDiv);

// Part 2
// Create a racing game with the two cars. When the race button is pressed, the two cars should move across the screen until one of them is at the end of the screen. When one of the blocks reaches the end - you should alert "winner!"
let car1, car2, startRaceBtn, race, animate, position;
car1 = document.querySelector(".car1");
car2 = document.querySelector(".car2");
startRaceBtn = document.querySelector("button");

race = () => {
  animate = setInterval(frame, 20);
  position1 = Math.round(Math.random() * 11);
  position2 = Math.round(Math.random() * 11);

  function frame() {
    if (position1 == 99 || position2 == 99) {
      clearInterval(animate);
      alert('winner');
    } else {
      position1++;
      position2++;
      car1.style.position = 'relative';
      car1.style.left = position1 + "%";
      car2.style.position = 'relative';
      car2.style.left = position2 + "%";
    }
  }
};

startRaceBtn.addEventListener("click", race);
