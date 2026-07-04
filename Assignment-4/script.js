// Task 1: Keyboard Events
const chatInput = document.getElementById("chat-input");
const chatMessages = document.getElementById("chat-messages");

chatInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        const newMessage = document.createElement("li");
        newMessage.textContent = chatInput.value;
        chatMessages.appendChild(newMessage);
        chatInput.value = "";
    }
});


// Task 2: Timers

// setTimeout
const alertBtn = document.getElementById("alert-btn");
const alertMsg = document.getElementById("alert-msg");

alertBtn.addEventListener("click", function () {
    alertMsg.style.display = "block";

    setTimeout(function () {
        alertMsg.style.display = "none";
    }, 3000);
});

// setInterval
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const counterDisplay = document.getElementById("counter-display");

let count = 0;
let timerId;

startBtn.addEventListener("click", function () {
    clearInterval(timerId);

    timerId = setInterval(function () {
        count++;
        counterDisplay.textContent = count;
    }, 1000);
});

stopBtn.addEventListener("click", function () {
    clearInterval(timerId);
});


// Task 3: Local Storage

const nameInput = document.getElementById("name-input");
const saveBtn = document.getElementById("save-btn");
const greetingName = document.getElementById("greeting-name");

// Load saved name
const savedName = localStorage.getItem("savedName");

if (savedName) {
    greetingName.textContent = savedName;
}

// Save name
saveBtn.addEventListener("click", function () {
    const name = nameInput.value;

    localStorage.setItem("savedName", name);
    greetingName.textContent = name;
});


// Task 4: Event Delegation

const delegationList = document.getElementById("delegation-list");

delegationList.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("completed");
    }
});