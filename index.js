document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll to the top when the header is clicked
  const header = document.getElementById('home-header');
  if (header) {
    header.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
