var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters

  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".slider-button--next",
    prevEl: ".slider-button--prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            
            center: [25.34, 34.73],
            zoom: 7
        });
    }

