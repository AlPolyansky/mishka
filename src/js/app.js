var commonModule = (function(){


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



  // Прослушка собтий
  var setUpListener = function(){
    menuButton.on('click',activeSandwich);
  };


  return {
      init : function(){
          setUpListener();
      }
  }

})();

commonModule.init();


