const menu = document.querySelector(".menu");
const checkbox = document.querySelector(".menu-botao");

checkbox.addEventListener("change", () => {
  menu.classList.toggle("menu-aberto", checkbox.checked);
});

const swiper = new Swiper('.swiper', {
  slidesPerView: 2,
  spaceBetween: 16,

    autoplay: {
    delay: 2500,           
    disableOnInteraction: false,  
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    576: { slidesPerView: 3, spaceBetween: 20 },
    992: { slidesPerView: 4, spaceBetween: 24 },
  },
});
