"use strict";

window.Webflow ||= [];
window.Webflow.push(() => {
  $(".slider-main_component").each(function (index) {
    const swiper = new Swiper($(this).find(".swiper")[0], {
      slidesPerView: 1,
      speed: 700,
      keyboard: true,
      mousewheel: {
        forceToAxis: true,
      },
      slideToClickedSlide: true,
      followFinger: false,
    });
  });
});
