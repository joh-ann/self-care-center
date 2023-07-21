
// load
document.addEventListener("DOMContentLoaded", function() {
    showLogin();
});


// elements
var logo = document.getElementById("logo");
var affirmBtn = document.getElementById("aff");
var mantraBtn = document.getElementById("man");
var receiveMsg = document.querySelector(".button");
var medImg = document.querySelector("medImg");
var container2 = document.querySelector(".container2");
var mainContainer = document.querySelector(".main-container");
var loginContainer = document.querySelector(".login-container");
var loginForm = document.getElementById("login-form");

// event listeners
// reload home page on click
logo.addEventListener("click", function () {
    location.reload();
});

// uncheck mantra
affirmBtn.addEventListener("click", function () {
    if (affirmBtn.checked) {
        mantraBtn.checked = false;
    }
});

// uncheck affirm
mantraBtn.addEventListener("click", function () {
    if (mantraBtn.checked) {
        affirmBtn.checked = false;
    }
});

// display either affirm or mantra
receiveMsg.addEventListener("click", function () {
    if (affirmBtn.checked) {
      displayRandomMsg(affirmations);
    } else if (mantraBtn.checked) {
      displayRandomMsg(mantras);
    }
  });

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // get user name from input
    var nameInput = document.getElementById("name");
    var userName = nameInput.value;

    showMain(userName);
});


// functions
function displayRandomMsg(messages) {
    var randomIndex = Math.floor(Math.random() * messages.length);
    var message = messages[randomIndex]

    container2.innerHTML = `<p>${message}</p>`
}

function showLogin() {
    mainContainer.classList.add("hide");
    loginContainer.classList.remove("hide");
}

function showMain(userName) {
    var greeting = document.createElement("h2");
    greeting.textContent = `Hello, ${userName}! Welcome to the Self Care Center.`;
    document.querySelector(".greeting").appendChild(greeting);

    loginContainer.classList.add("hide");
    mainContainer.classList.remove("hide");
}


