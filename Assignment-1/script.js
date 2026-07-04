// Task 1: Select & Read

// a) Select the heading and log its text content
const heading = document.getElementById("main-heading");
console.log(heading.textContent);

// b) Select the paragraph and log its text content
const subText = document.getElementById("sub-text");
console.log(subText.textContent);

// c) Select all <li> elements inside #color-list and log the count
const listItems = document.querySelectorAll("#color-list li");
console.log(listItems.length);

// Task 2: Change Text

// a) Change the message text
const message = document.getElementById("message");
message.textContent = "Hello from JavaScript!";

// b) Change the info text
const info = document.getElementById("info");
info.textContent = "This information has been updated.";


// Task 3: Change Colors & Styles

// a) Change heading color to blue
const colorBox = document.getElementById("color-box");
colorBox.style.color = "blue";

// b) Change background color to yellow
const highlight = document.getElementById("highlight");
highlight.style.backgroundColor = "yellow";

// c) Change font size and text color
const textSize = document.getElementById("text-size");
textSize.style.fontSize = "24px";
textSize.style.color = "red";