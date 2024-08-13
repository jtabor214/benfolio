document.addEventListener("DOMContentLoaded", function () {
  var dropdown = document.querySelector(".dropdown");
  var dropdownContent = dropdown.querySelector(".dropdown-content");

  dropdown.querySelector(".dropbtn").addEventListener("click", function (event) {
    event.preventDefault();
    dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
  });

  // Close the dropdown if the user clicks outside of it
  window.addEventListener("click", function(event) {
    if (!dropdown.contains(event.target)) {
      dropdownContent.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Hide all 
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => section.style.display = 'none');

  // Click event listeners to nav links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();

      // Hide all sections
      sections.forEach(section => section.style.display = 'none');

      // Show the selected section
      const sectionId = this.getAttribute('data-section');
      document.getElementById(sectionId).style.display = 'block';
    });
  });

  // Event listener to the header to return to home
  const header = document.getElementById('home-header');
  header.addEventListener('click', function() {
    sections.forEach(section => section.style.display = 'none');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});