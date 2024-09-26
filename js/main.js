'use strict';

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    /* slidesPerView: '3',
    spaceBetween: 30, */

    autoplay:{
      delay:0,
    },

    speed: 3000, 
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    breakpoints: {
      320: {
        slidesPerView: 1, // 768px以上では2枚表示
        spaceBetween: 20, // 768px以上ではスライド間の余白を20pxに
    },

      768: {
          slidesPerView: 2, // 768px以上では2枚表示
          spaceBetween: 20, // 768px以上ではスライド間の余白を20pxに
      },
      1024: {
          slidesPerView: 3, // 1024px以上では3枚表示
          spaceBetween: 30, // 1024px以上ではスライド間の余白を30pxに
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



/* const nav2 = document.querySelector(".navi2");
const btn2 = document.querySelector(".nav-btn2");
const mask2 = document.querySelector(".nav-mask2");
const navmenu2 = document.querySelector(".nav-menu2");

btn2.addEventListener("click",()=>{
  nav2.classList.toggle("active");
  btn2.classList.toggle("active");
  mask2.classList.toggle("active");
});

mask2.addEventListener("click",()=>{
nav2.classList.toggle("active");
btn2.classList.toggle("active");
mask2.classList.toggle("active");
});

navmenu2.addEventListener("click",()=>{
btn2.classList.toggle("active");
nav2.classList.toggle("active");
mask2.classList.toggle("active");
}); */


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




