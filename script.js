//! ------------------------ menu toggle script ---------------------------->
const navMenu = document.querySelector(".nav-menu");
const menuIconOpen = document.querySelector(".menu-icon[name='mob-menu']");
const menuIconClose = document.querySelector(".menu-icon[name='mob-close']");
const nav = document.querySelector("nav");
// add auth div into navllist
const mobAuth = document.createElement("div");

function openMenu() {
  nav.style.display = "flex";
  nav.style.flexDirection = "column";
  nav.style.alignItems = "center";
  menuIconOpen.style.display = "none";
  menuIconClose.style.display = "flex";
  document.body.style.overflowY = "hidden";
  nav.appendChild(mobAuth);
  mobAuth.setAttribute("class","mobAuth");
  mobAuth.innerHTML = `
  <a href="#" class="myLearning" onclick="toggleLearning()">My Learning</a>
  <div>
      <a class="mobLogin" href="./login.html">
          <i class="fa-solid fa-right-to-bracket"></i>
          <span>Login</span>
      </a>
  </div>
  <div>
      <a class="mobSignUp" href="./signup.html">
          <i class="fa-regular fa-user"></i>
          <span>Signup</span>
      </a>
  </div>
`;
}

function closeMenu() {
  nav.style.display = "none";
  menuIconOpen.style.display = "flex";
  menuIconClose.style.display = "none";
  document.body.style.overflowY = "auto";
  nav.removeChild(mobAuth);

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

