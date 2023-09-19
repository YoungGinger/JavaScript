let seconds = 0;
let minutes = '00';
let hours = '00';

const startbutton = document.querySelector('.js-start-button');

const stopbutton = document.querySelector('.js-stop-button');

const clearbutton = document.querySelector('.js-clear-button');

let isOn;
let intervalId;

startbutton.addEventListener('click', () => {
   time();
})

stopbutton.addEventListener('click', () => {
  isOn = false;
  clearInterval(intervalId);
})

clearbutton.addEventListener('click', () => {
  clearInterval(intervalId);
  isOn = false;
  seconds = '00';
  minutes = '00';
  hours = '00';
  document.querySelector('.js-display-time')
  .innerHTML = '00:00:00';
})

function time () {
  if (isOn) {
    return;
  }
  isOn = true;
  intervalId = setInterval(() => {
    seconds++;
    if (seconds > 59){
      minutes++;
      seconds = 0;
    } 

    if (minutes > 59){
      hours++;
      minutes = 0;
    }

    if (hours > 23){
      hours = 0;
    }

    console.log(seconds);
    document.querySelector('.js-display-time')
  .innerHTML = `${hours}:${minutes}: 
  ${seconds}`;
  }, 1000);

}


