'use strict';

const nav2 = document.querySelector(".navi2");
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
});



