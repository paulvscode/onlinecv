const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const navLogo = document.querySelector(".nav-logo");
const contactForm = document.getElementById("contact-form");

hamburger.addEventListener("click", mobileMenu);

window.addEventListener("scroll", onScrollTrigger);

function onScrollTrigger() {
  if (window.scrollY >= 50) {
    navLogo.classList.add("hidden");
  } else if (window.scrollY === 0 && navLogo.classList.contains("hidden")) {
    navLogo.classList.remove("hidden");
  }
}

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// Email

(function () {
  emailjs.init("user_0CrOptuBnm7Nb076RUCzg");
})();
window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      this.contact_number.value = (Math.random() * 100000) | 0;
      // these IDs from the previous steps
      emailjs.sendForm("service_djxr31y", "template_p40ogia", this).then(
        function () {
          console.log("SUCCESS!");
          contactForm.reset();
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    });
};
