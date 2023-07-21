
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

// event listeners
// reload home page on click
logo.addEventListener("click", function () {
    location.reload();
});

affirmBtn.addEventListener("click", function () {

});


mantraBtn.addEventListener("click", function () {

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