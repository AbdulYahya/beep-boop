'use strict';
var numbersStore = [];

// Business Logic
function countUpTo(number) {
  for (var i = 0; i <= number; i++) {
    if (i == replaceIf(i))
      replaceIf(i);
  }
  return numbersStore.join(' ');
}

function replaceIf(number) {
  if ((number == '0') || ((number % 3 != 0) && (number.toString().match(/[0]/)))) {
    numbersStore.push('Beep!');
  } else if ((number == '1') || ((number % 3 != 0) && (number.toString().match(/[1]/)))) {
    numbersStore.push('Boop!');
  } else if ((number == 3) || (number % 3 == 0)) {
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
    numbersStore = [];
    var userInputField = parseInt($('#userInputField').val());
    var beepBoopDisplay = $('#beepBoopDisplay');
    beepBoopDisplay.text(countUpTo(userInputField));
  });
}

$(function(){
  beepBoopForm();
});
