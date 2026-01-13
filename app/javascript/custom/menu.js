document.addEventListener("DOMContentLoaded", function() {
  // Hamburger toggle
  const hamburger = document.querySelector("#hamburger");
  const navMenu = document.querySelector("#nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", function(event) {
      event.preventDefault();
      navMenu.classList.toggle("collapse");
    });
  }

  // Account dropdown toggle
  const account = document.querySelector("#account");
  if (account) {
    const dropdownMenu = account.nextElementSibling; // <ul class="dropdown-menu">
    if (dropdownMenu) {
      account.addEventListener("click", function(event) {
        event.preventDefault();
        dropdownMenu.classList.toggle("active");
      });

      // Close dropdown when clicking outside
      window.addEventListener("click", function(event) {
        if (!account.contains(event.target) && !dropdownMenu.contains(event.target)) {
          dropdownMenu.classList.remove("active");
        }
      });
    }
  }
});
