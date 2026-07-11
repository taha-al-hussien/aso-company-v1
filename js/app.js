const year = document.getElementById("year");
let d = new Date();
year.innerHTML = d.getUTCFullYear();

landingText = document.querySelector(".landing .content");

window.onload = () => {
  setTimeout(() => {
    landingText.classList.add("loaded");
  }, 500);
};

sideBarBtn = document.querySelector(".fa-angle-down");
sideBar = document.querySelector(".navbar ul");
sideBarBtn.onclick = () => {
  sideBarBtn.classList.toggle("open");
  sideBar.classList.toggle("open");
}

// Initialize swiper
const swiper = new Swiper(".slider-wrapper", {
  // Optional parameters
  loop: true,
  grabCursos: true,
  spaceBetween: 30,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
  autoplay: { delay: 3000 },
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    992: { slidesPerView: 3 },
  },
});

const privilegesItems = document.querySelectorAll(".privileges .item");
const courses = document.querySelectorAll(".courses .item");
const opbserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
privilegesItems.forEach((ele) => opbserver.observe(ele));
courses.forEach((ele) => opbserver.observe(ele));
