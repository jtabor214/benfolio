document.addEventListener('DOMContentLoaded', function () {
  const navbarPlaceholder = document.getElementById('navbar-placeholder');

  // Check if the navbar placeholder exists
  if (navbarPlaceholder) {
    fetch('navbar.html')
      .then(response => response.text())
      .then(data => {
        navbarPlaceholder.innerHTML = data;
      })
      .catch(error => {
        console.error('Error loading the navbar:', error);
      });
  }
});
