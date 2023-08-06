$(document).ready(function () {
  //Slider//
  $("#hero").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    items: 1,
    dots: false,
    smartspeed: 10000,
    navText: ["PREV", "NEXT"],
    responsive: {
      0: {
            nav: false,
          dots:true,
      },
      760: {
        nav: true,
      },
    },
  });

  // project SLIDER-2//
  $("#slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    smartspeed: 1000,
    margin: 20,
    responsive: {
      0: {
        items: 1,
      },
      760: {
        items: 2,
        center:true,
      },
      900: {
        items: 2,
        center: true,
      },
      1140: {
        items: 2,
        center: true,
      },
      1200:{
        items:3,
        center: true,
        margin:20,
      }
    },
  });

  $("#review-item").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    items: 1,
  });
});
