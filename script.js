

const larguraDaTela = window.innerWidth

if (larguraDaTela < 800) {
  var swiper5 = new Swiper(".mySwiper5", {
      grabCursor: true,
      autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
      spaceBetween: 20,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
} else {
  var swiper5 = new Swiper(".mySwiper5", {
      slidesPerView: 3,
      spaceBetween: 10,
      loop: true,
      grabCursor: true,
      autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
}





