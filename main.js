// document ready vanilla js
document.addEventListener('DOMContentLoaded', function() {
  signupButton = document.getElementById('signup');
  signupButton.addEventListener('click', function(e) {
    document.getElementById('newsletter_outer').classList.toggle('open');
    if (signupButton.innerHTML == 'CLOSE') {
      signupButton.innerHTML = 'NEWSLETTER SIGNUP';
    } else {
      signupButton.innerHTML = 'CLOSE';
    }
  });
});