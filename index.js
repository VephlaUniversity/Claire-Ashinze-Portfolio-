// Navigation //

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("header ul.menu a");

  links.forEach((link) => {
    link.addEventListener("click", smoothScroll);
  });

  function smoothScroll(e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: "smooth",
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Select all project links
  const projectLinks = document.querySelectorAll(".project-links a");

  // Iterate over each project link
  projectLinks.forEach(function (link) {
    // Store original inner HTML
    const originalHTML = link.innerHTML;

    link.addEventListener("mouseleave", function () {
      link.innerHTML = originalHTML;
    });
  });
});
