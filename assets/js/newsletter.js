// Add event listener when the page finishes loading
document.addEventListener('DOMContentLoaded', function() {
  let newsPopup = document.getElementById('news-popup');
  let blurredElements = document.querySelectorAll('body > *:not(#news-popup)');

  // News popup
  document.getElementById('btn-join-now').addEventListener('click', function handleClick(event) {
    newsPopup.classList.remove('hidden');
    blurredElements.forEach(element => element.classList.add('blur'));
  });

  // Close news popup
  document.querySelector('.btn-close').addEventListener('click', function handleClick(event) {
    newsPopup.classList.add('hidden');
    blurredElements.forEach(element => element.classList.remove('blur'));
  });

  const emailInput = document.getElementById('email-input');
  // Sign up button clicked on news popup
  document.getElementById('btn-signup').addEventListener('click', function handleClick(event) {
    //newsPopup.classList.add('hidden');
    // Check if email input is valid
    if (emailInput.checkValidity()) {
      // All is good, user has subscribed.
      document.getElementById('news-popup-inputs').classList.add('hidden');
      document.getElementById('news-popup-success').classList.remove('hidden');
      document.getElementById('email-error').classList.add('hidden');
    } else {
      // Email input is not valid
      document.getElementById('news-popup-inputs').classList.remove('hidden');
      document.getElementById('email-error').classList.remove('hidden');
      document.getElementById('news-popup-success').classList.add('hidden');

      // Set focus on email input
      emailInput.focus();
    }

  });
});
