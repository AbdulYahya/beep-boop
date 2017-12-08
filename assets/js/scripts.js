'use strict';
// Global Variables
var numbersStore = [];

// Business Logic
function countUpTo(number) {
  for (var i = 0; i <= number; i++) {
    debugger;
    if (i == replaceIf(i)) {
      replaceIf(i);
    }
    console.log(numbersStore);
  }
}

function replaceIf(number) {
  if (number == '0') {
    numbersStore.push('Beep!');
  } else if (number == '1') {
    numbersStore.push('Boop!');
  } else if (number == '3') {
    numbersStore.push("I'm sorry, Dave. I'm afraid I can't do that");
  } else {
    numbersStore.push(number);
  }
}

// User Interface Logic
function beepBoopForm() {
  var beepBoopForm = document.getElementById('beepBoopForm');
  beepBoopForm.addEventListener('submit', function(event) {
    event.preventDefault();
    var userInputField = parseInt($('#userInputField').val());
    var beepBoopDisplay = $('#beepBoopDisplay');
    countUpTo(userInputField);
    // replaceIf(userInputField);
    // beepBoopDisplay.text(userInputField);
  });
}

$(function(){
  beepBoopForm();
});
