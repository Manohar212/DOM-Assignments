// Task 1: Event Listeners & Class Manipulation

// a) Toggle dark mode
const themeBtn = document.getElementById("theme-btn");
const body = document.body;

themeBtn.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
});

// b) Hover effect
const hoverBox = document.getElementById("hover-box");

hoverBox.addEventListener("mouseenter", function () {
    hoverBox.classList.add("highlight");
});

hoverBox.addEventListener("mouseleave", function () {
    hoverBox.classList.remove("highlight");
});


// Task 2: Modifying Attributes

// a) Change image source and alt text
const swapBtn = document.getElementById("swap-btn");
const profilePic = document.getElementById("profile-pic");

swapBtn.addEventListener("click", function () {
    profilePic.src = "https://via.placeholder.com/150/0000FF/808080?Text=New+Image";
    profilePic.alt = "New Profile Image";
});

// b) Disable button after clicking
const disableBtn = document.getElementById("disable-btn");

disableBtn.addEventListener("click", function () {
    disableBtn.disabled = true;
});


// Task 3: Creating and Appending Elements

// a) Select list and button
const itemList = document.getElementById("item-list");
const addItemBtn = document.getElementById("add-item-btn");

// b) Create and append new list item
addItemBtn.addEventListener("click", function () {
    const newItem = document.createElement("li");
    newItem.textContent = "New dynamically added item";
    itemList.appendChild(newItem);
});