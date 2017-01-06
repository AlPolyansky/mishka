var commonModule = (function(){


  // Плагины

  svg4everybody();


  // Переменные
  var menuButton = $('.sandwich');
  var nav = $('.menu');
  var header = $('.header');
  var sliderTime = 10000;



  // Функции

  var activeSandwich = function(e){
    e.preventDefault();
    var $this = $(this);
    $this.toggleClass('sandwich--active');
    nav.toggleClass('menu--active');
    header.toggleClass('header--active')
  };

  // FIX

  var goodsLinkStop = function(){
    $('.goods__link').on('click',function(e){
      e.preventDefault();
    })
  }

  goodsLinkStop();

  // FIX


  var addRecallSlider = function(){
    var $slider = $('.recalls__content');

    $slider.flickity({
      pageDots: false,
      adaptiveHeight: true,
      prevNextButtons: false,
      draggable: false,
      autoPlay: sliderTime,
      wrapAround: true,
    })
    $('.recalls__control--prev').on( 'click', function(e) {
      e.preventDefault();
      $slider.flickity('previous');
    });
    $('.recalls__control--next').on( 'click', function(e) {
      e.preventDefault();
      $slider.flickity('next');
    });
  }


  ymaps.ready(function () {
    var mapMobile
    var myMap = new ymaps.Map('map', {
            center: [59.9387, 30.3233],
            zoom: 19,
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Mishka',
            balloonContent: 'Мы находимся тут'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../img/map-pin.svg',
            // Размеры метки.
            iconImageSize: [67, 93],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        });

    myMap.geoObjects.add(myPlacemark);
    if(Modernizr.touchevents){
      myMap.behaviors.disable('multiTouch');
      myMap.behaviors.disable('drag');
    };
});





  // Прослушка собтий
  var setUpListener = function(){
    menuButton.on('click',activeSandwich);
  };


  return {
      init : function(){
          setUpListener();
          addRecallSlider();
      }
  }

})();

commonModule.init();


