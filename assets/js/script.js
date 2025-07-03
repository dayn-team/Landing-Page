document.addEventListener("DOMContentLoaded", () => {
  // Getting current year for footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Open Side Nav
  function openNav() {
    document.getElementById("mobileScreenMenu").style.width = "250px";
  }

  // Close Side Nav
  function closeNav() {
    document.getElementById("mobileScreenMenu").style.width = "0";
  }
});