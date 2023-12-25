//! ------------------------ menu toggle script ---------------------------->
const navMenu = document.querySelector(".nav-menu");
const menuIconOpen = document.querySelector(".menu-icon[name='mob-menu']");
const menuIconClose = document.querySelector(".menu-icon[name='mob-close']");
const nav = document.querySelector("nav");

function openMenu() {
  nav.style.display = "flex";
  menuIconOpen.style.display = "none";
  menuIconClose.style.display = "flex";
  document.body.style.overflowY = "hidden";
}

function closeMenu() {
  nav.style.display = "none";
  menuIconOpen.style.display = "flex";
  menuIconClose.style.display = "none";
  document.body.style.overflowY = "auto";
}

menuIconOpen.addEventListener("click", openMenu);
menuIconClose.addEventListener("click", closeMenu);

//! ------------------------- active link script -------------------------------->
const navLinks = document.querySelectorAll(".navlist a");

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    navLinks.forEach((link) => {
      link.classList.remove("active-link");
    });

    link.classList.add("active-link");
  });
});

//! ------------------------- paragraph appear script -------------------------------->

document.addEventListener("DOMContentLoaded", function () {
  var para1 = document.querySelector(".para_1");
  var para2 = document.querySelector(".para_2");

  setTimeout(function () {
    para1.classList.remove("hidden");
    para1.classList.add("visible");
  }, 1000);

  setTimeout(function () {
    para2.classList.remove("hidden");
    para2.classList.add("visible");
  }, 2000);
});

//! --------------------------------- review section -------------------------------->
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
