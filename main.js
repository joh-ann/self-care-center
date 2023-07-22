
// load
document.addEventListener("DOMContentLoaded", function() {
});

// elements
var logo = document.getElementById("logo");
var affirmBtn = document.getElementById("aff");
var mantraBtn = document.getElementById("man");
var receiveMsg = document.querySelector(".button2");
var medImg = document.querySelector("medImg");
var container2 = document.querySelector(".container2");
var nameInput = document.querySelector("#username");
var enterBtn = document.querySelector(".button1");
var loginView = document.querySelector(".login-view");
var mainView = document.querySelector(".main-view");
var greetingMsg = document.getElementById("welcome");
var nameReq = document.getElementById("name-req")

// event listeners
// reload home page on click
logo.addEventListener("click", function () {
    location.reload();
});

affirmBtn.addEventListener("click", function () {
    if (affirmBtn.checked) {
        mantraBtn.checked = false;
    }
});


mantraBtn.addEventListener("click", function () {
    if (mantraBtn.checked) {
        affirmBtn.checked = false;
    }
});

receiveMsg.addEventListener("click", function () {
    if (affirmBtn.checked) {
      displayRandomMsg(affirmations);
    } else if (mantraBtn.checked) {
      displayRandomMsg(mantras);
    }
  });


enterBtn.addEventListener("click", function(event) {
    event.preventDefault();
    var enteredName = nameInput.value;
    if (enteredName !== "" && isNaN(enteredName)) {
        // console.log(enteredName)
        loadMain();
        greet(enteredName);
    } else {
        nameReq.style.visibility="visible"
        // alert(`Please enter a valid name.`)
    }
});

// functions
function displayRandomMsg(messages) {
    var randomIndex = Math.floor(Math.random() * messages.length);
    var message = messages[randomIndex]

    container2.innerHTML = `<p>${message}</p>`
}

function showIt(element) {
    element.classList.remove("hidden");
}

function hideIt(element) {
    element.classList.add("hidden");
}

function loadMain() {
    hideIt(loginView);
    showIt(mainView);
}

function greet(name) {
    greetingMsg.innerText = `Namaste, ${name}`;
}