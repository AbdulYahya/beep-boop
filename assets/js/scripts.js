'use strict';
// Global Variables

// Business Logic
function countUpTo(number) {
  for (var i = 0; i <= number; i ++) {
    console.log(i);
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
    // beepBoopDisplay.text(userInputField);
  });
}

$(function(){
  beepBoopForm();
});
