"use strict";

// slider
const swiper = new Swiper('.hero__swiper', {
    spaceBetween:10,
    simulateTouch:false,
    speed:500,
    // If we need pagination
    pagination: {
      el: '.hero__pagination',
      clickable:true,
      bulletClass:'hero__bullet',
      bulletActiveClass:'active',
      renderBullet: function (index, className) {
        return '<span class="' + className + '"></span>';
      }
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.hero__button-next',
      prevEl: '.hero__button-prev',
    },

  });

function accordion(btns){
  btns.forEach(element => {
    const panel = element.nextElementSibling;
    if(panel === null){
        return;
    }
    element.addEventListener("click", function() {
      element.classList.toggle("active");
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }});  
  });
}
//header accordion
const linkHeader = document.querySelectorAll(".menu-header__link");
accordion(linkHeader)
// footer accordion
const titlesFooter = document.querySelectorAll(".menu-top-footer__title");
accordion(titlesFooter)

