var commonModule = (function(){


  // Плагины

  svg4everybody();


  // Переменные
  var menuButton = $('.sandwich');
  var nav = $('.menu');
  var header = $('.header');



  // Функции

  var activeSandwich = function(e){
    e.preventDefault();
    var $this = $(this);
    $this.toggleClass('sandwich--active');
    nav.toggleClass('menu--active');
    header.toggleClass('header--active')
  };

  var addRecallSlider = function(){
    var $slider = $('.recalls__content');

    $slider.flickity({
      pageDots: false,
      adaptiveHeight: true,
      prevNextButtons: false,
    })
    $('.recalls__control--prev').on( 'click', function(e) {
      e.preventDefault();
      $slider.flickity('previous');
      //$slider.flickity('next');
    });
    $('.recalls__control--next').on( 'click', function(e) {
      e.preventDefault();
      $slider.flickity('next');
    });
  }



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


