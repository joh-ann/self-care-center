
// load
document.addEventListener("DOMContentLoaded", function() {

});

// elements
var logo = document.getElementById("logo");
var affirmBtn = document.getElementById("aff");
var mantraBtn = document.getElementById("man");
var receiveMsg = document.querySelector(".button");
var medImg = document.querySelector("medImg");
var container2 = document.querySelector(".container2");
var nameInput = document.querySelector("#username");
var enterBtn = document.querySelector(".#enter");

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

// functions
function displayRandomMsg(messages) {
    var randomIndex = Math.floor(Math.random() * messages.length);
    var message = messages[randomIndex]

    container2.innerHTML = `<p>${message}</p>`
}