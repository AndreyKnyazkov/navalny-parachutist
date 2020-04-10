window.addEventListener('DOMContentLoaded', function () {

let navalnyPlain = document.querySelector('.navalny-plain'),
    navalnyImg = document.querySelector('.navalny-img'),
    count = 0,
    navalnyStart = document.getElementById('navalny-buttons_start'),
    navalnyStop = document.getElementById('navalny-buttons_stop'),
    navalnyReset = document.getElementById('navalny-buttons_reset');

let flyInterval = 0;
let navalnyFly = function() {
  console.log('сообщение');
  flyInterval = requestAnimationFrame(navalnyFly);
  count = count + 0.3;
  if (count < 100) {
    navalnyImg.style.top = `${count}vh`;
    navalnyPlain.style.left = `${count}vh`;
  } else if (count < 200) {
    navalnyPlain.style.left = `${count}vh`;
  } else {
    alert('Блэт Путэн');
    cancelAnimationFrame(flyInterval);
  }
};

let button = false;

  navalnyStart.addEventListener('click', () => {
    if (button === false) {
      flyInterval = requestAnimationFrame(navalnyFly);
      button = true;
    }
  });
  navalnyStop.addEventListener('click', () => {
    if (button === true) {
      flyInterval = cancelAnimationFrame(flyInterval);
      button = false;
      console.log(button);
    }
  });
  navalnyReset.addEventListener('click', () => {
    flyInterval = cancelAnimationFrame(flyInterval);
    count = 0;
    navalnyImg.style.top = `${count}vh`;
    navalnyPlain.style.left = `${count}vh`;
    button = false;
  });



});