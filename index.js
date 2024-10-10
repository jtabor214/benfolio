document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll to the top when the header is clicked
  const header = document.getElementById('home-header');
  if (header) {
    header.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
  var hcaptchaResponse = hcaptcha.getResponse();  // Get the hCaptcha response

  if (hcaptchaResponse.length === 0) {
      // If hCaptcha is not completed, prevent form submission and alert the user
      alert("Please complete the CAPTCHA.");
      event.preventDefault();
  }
});