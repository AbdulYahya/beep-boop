'use strict';
// Business Logic
function replaceIf(number) {
  var numbersStore = [];
  for (var i = 0; i <= number; i++) {
    if ((i == '0') || ((i % 3 != 0) && (i.toString().match(/[0]/)))) {
      numbersStore.push('Beep!');
    } else if ((i == '1') || ((i % 3 != 0) && (i.toString().match(/[1]/)))) {
      numbersStore.push('Boop!');
    } else if ((i == 3) || (i % 3 == 0)) {
      numbersStore.push("I'm sorry, Dave. I'm afraid I can't do that");
    } else {
      numbersStore.push(i);
    }
  }
  return numbersStore.join(' ');
}

// User Interface Logic
function beepBoopForm() {
  var beepBoopForm = document.getElementById('beepBoopForm');
  beepBoopForm.addEventListener('submit', function(event) {
    event.preventDefault();
    var userInputField = parseInt($('#userInputField').val());
    var beepBoopDisplay = $('#beepBoopDisplay');
    beepBoopDisplay.text(replaceIf(userInputField));
  });
}

$(function(){
  beepBoopForm();
});
