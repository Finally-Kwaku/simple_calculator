(function() {
  const screen = document.querySelector('.screen');
  const buttons = document.querySelectorAll('.btn');
  const clear = document.querySelector('.btn-clear');
  const equal = document.querySelector('.btn-equal');

  buttons.forEach(function(button) {
    button.addEventListener('click', function(e) {
      const value = e.target.dataset.num;
      if (/^[\d+\-*/().]+$/.test(value)) {
        screen.value += value;
      }
    })
    
  });

  equal.addEventListener('click', function() {
    if (screen.value === '') {
      screen.value = "";
    } else {
    try {
      const answer = Function('"use strict";return (' + screen.value + ')')();
      screen.value = answer;
    } catch (error) {
      screen.value = 'Error: ' + error.message;
    }
  }
});

  clear.addEventListener('click', function() {
    screen.value = "";
  });
})();
