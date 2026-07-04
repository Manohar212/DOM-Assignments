// Task 1: Form Handling & Event Objects

// a) Select the form and display span
const userForm = document.getElementById("user-form");
const displayName = document.getElementById("display-name");

// b) Add submit event listener
userForm.addEventListener("submit", function (e) {

    // c) Prevent page reload
    e.preventDefault();

    // d) Get input value
    const username = document.getElementById("username-input").value;

    // e) Update display name
    displayName.textContent = username;
});


// Task 2: Removing Elements

// a) Select all delete buttons
const deleteButtons = document.querySelectorAll(".delete-btn");

// b) Loop through buttons
deleteButtons.forEach(function (button) {

    button.addEventListener("click", function (e) {

        // c) Remove parent <li>
        e.target.parentElement.remove();
    });

});


// Task 3: DOM Traversal

// a) Select container and log number of children
const containerBox = document.getElementById("container-box");
console.log(containerBox.children.length);

// b) Select button
const colorParentBtn = document.getElementById("color-parent-btn");

// c) Change parent background color
colorParentBtn.addEventListener("click", function (e) {
    e.target.parentElement.style.backgroundColor = "lightblue";
});