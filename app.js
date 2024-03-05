"use strict";

window.Webflow ||= [];
window.Webflow.push(() => {
  $(".slider-main_component").each(function (index) {
    const swiper = new Swiper($(this).find(".swiper")[0], {});
  });
});
