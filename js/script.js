// Строгий режим
"use strict"

// Слухаємо кліки на усій сторінці:
document.addEventListener("click", documentActions);

function documentActions(e) {
   const targetElement = e.target;

   if (targetElement.closest(".icon-menu")) {
      document.body.classList.toggle("menu-open");
   }

   if (targetElement.closest("[data-spoller]")) {
      const currentElement = targetElement.closest("[data-spoller]");
      if (!currentElement.nextElementSibling.classList.contains("--sliding")) {
         currentElement.classList.toggle("active");
      }
      slideToggle(currentElement.nextElementSibling);
   }
}

// Спойлер в футері:
const spollers = document.querySelectorAll("[data-spoller]");

if (spollers.length) {
   spollers.forEach(spoller => {
      spoller.nextElementSibling.hidden = true;
   })
}

// Плавна поява спойлера:
let slideDown = (target, duration = 500) => {
   if (!target.classList.contains("--sliding")) {
      target.classList.add("--sliding");
      target.hidden = false;
      let height = target.offsetHeight;

      target.style.paddingTop = 0;
      target.style.paddingBottom = 0;
      target.style.marginTop = 0;
      target.style.marginBottom = 0;

      target.style.overflow = "hidden";
      target.style.height = 0;

      target.offsetHeight;

      target.style.transitionProperty = `height, margin, padding`;
      target.style.transitionDuration = `${duration}ms`;

      target.style.height = `${height}px`;

      target.style.removeProperty("padding-top");
      target.style.removeProperty("padding-bottom");
      target.style.removeProperty("margin-top");
      target.style.removeProperty("margin-bottom");

      setTimeout(() => {
         target.style.removeProperty("height");
         target.style.removeProperty("overflow");
         target.style.removeProperty("transition-duration");
         target.style.removeProperty("transition-property");
         target.classList.remove("--sliding");
      }, duration)
   }
}

let slideUp = (target, duration = 500) => {
   if (!target.classList.contains("--sliding")) {
      target.classList.add("--sliding");
      target.hidden = false;
      let height = target.offsetHeight;

      target.style.transitionProperty = `height, margin, padding`;
      target.style.transitionDuration = `${duration}ms`;
      target.style.height = `${height}px`;

      target.offsetHeight;

      target.style.overflow = "hidden";
      target.style.paddingTop = 0;
      target.style.paddingBottom = 0;
      target.style.marginTop = 0;
      target.style.marginBottom = 0;

      target.style.height = 0;

      setTimeout(() => {
         target.style.removeProperty("padding-top");
         target.style.removeProperty("padding-bottom");
         target.style.removeProperty("margin-top");
         target.style.removeProperty("margin-bottom");

         target.style.removeProperty("height");
         target.style.removeProperty("overflow");
         target.style.removeProperty("transition-duration");
         target.style.removeProperty("transition-property");
         target.classList.remove("--sliding");

         target.hidden = true;
      }, duration)
   }
}

let slideToggle = (target, duration = 500) => {
   target.hidden ? slideDown(target, duration) : slideUp(target, duration);
}


// Слайдери

const heroSlider = document.querySelector(".hero");
if (heroSlider) {
   const swiper = new Swiper('.hero', {
      // Optional parameters
      loop: true,
      autoHeight: true,
      speed: 800,
      parallax: true,

      // If we need pagination
      pagination: {
         el: '.hero__pagination',
         clickable: true,
      },
      // Navigation arrows
      navigation: {
         nextEl: '.hero__arrow--next',
         prevEl: '.hero__arrow--prev',
      },
   });
}
