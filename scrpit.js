document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".mobile-menu-toggle");
    const navLinks = document.querySelector(".nav-links");
  
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
      this.classList.toggle("active");
  
      // Update ARIA attributes
      const isExpanded = navLinks.classList.contains("active");
      this.setAttribute("aria-expanded", isExpanded);
    });
  
    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
      if (
        !event.target.closest(".main-nav") &&
        navLinks.classList.contains("active")
      ) {
        navLinks.classList.remove("active");
        menuToggle.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", false);
      }
    });
  
    // Handle window resize
    window.addEventListener("resize", function () {
      if (window.innerWidth > 767 && navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
        menuToggle.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", false);
      }
    });
  });
  