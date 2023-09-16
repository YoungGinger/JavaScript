
function finished () {
 
  setTimeout(function () {
    document.querySelector('.js-start-button')
      .innerHTML = 'Finished!';
  }, 1000);  

  document.querySelector('.js-start-button')
      .innerHTML = 'Loading...';
}

let timeoutId;

function displayMessage() {
  const messageElement = document.querySelector('.js-message');
  messageElement.innerHTML = 'Added';

  // First, cancel the previous timeout so that
  // it doesn't remove the message too quickly.
  clearTimeout(timeoutId);

  timeoutId = setTimeout(function() {
    messageElement.innerHTML = '';
  }, 2000);
}





let messages = 2;

// Save the intervalId in case we need to cancel it.
let intervalId;

// We'll use this variable to keep track of whether
// or not we're displaying the notification.
let isDisplayingNotification;

// Start displaying the notification in the tab
// when the page first loads.
displayNotification();

function displayNotification() {
  // If we're already displaying the notification,
  // stop this function because we don't want to
  // create 2 intervals at the same time.
  if (isDisplayingNotification) {
    return;
  }

  isDisplayingNotification = true;

  intervalId = setInterval(function() {
    if (document.title === 'App') {
      document.title = `(${messages}) New messages`;
    } else {
      document.title = 'App';
    }
  }, 1000);
}

function stopNotification() {
  isDisplayingNotification = false;

  clearInterval(intervalId);
  document.title = 'App';
}