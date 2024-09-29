'use strict';

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

    autoplay:{
      delay:0,
    },

    speed: 3000, 
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    breakpoints: {
      320: {
        slidesPerView: 1, 
        spaceBetween: 20, 
    },

      768: {
          slidesPerView: 2, 
          spaceBetween: 20, 
      },
      1024: {
          slidesPerView: 3, 
          spaceBetween: 30, 
      },
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    const navbtn = document.querySelector('.nav-btn');
    const headerHeight = header.offsetHeight;

    window.addEventListener('scroll', function() {
        if (window.scrollY > headerHeight) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        if (window.scrollY > headerHeight) {
          navbtn.classList.add('scrolled');
      } else {
          navbtn.classList.remove('scrolled');
      }

    });
});

// ハンバーガーメニュー設定
const nav = document.querySelector(".navi");
const btn = document.querySelector(".nav-btn");
const mask = document.querySelector(".nav-mask");
const navmenu = document.querySelector(".nav-menu");


btn.addEventListener("click",()=>{
    nav.classList.toggle("active");
    btn.classList.toggle("active");
    mask.classList.toggle("active");
});

mask.addEventListener("click",()=>{
    nav.classList.toggle("active");
    btn.classList.toggle("active");
    mask.classList.toggle("active");
});

navmenu.addEventListener("click",()=>{
    btn.classList.toggle("active");
    nav.classList.toggle("active");
    mask.classList.toggle("active");
});

document.addEventListener('DOMContentLoaded', () => {
  const images = [
      'img/header.jpg',
      'img/header2.jpg',
      'img/header3.jpg'
  ];
  let currentIndex = 0;
  const mainVisual = document.querySelector('.main-visual');

  setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      mainVisual.style.backgroundImage = `url(${images[currentIndex]})`;
  }, 3000);
});




