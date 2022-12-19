$(function () {

  function slider() {
    //変数宣言
    const $slides = $('.flow--slider-wrap');
    const $slide = $slides.find('.flow--slider-slide');
    const $slideMarginLeft = $slides.find('.flow--slider-slide+.flow--slider-slide');
    const $prev = $('.flow--slider-indicator-prev');
    const $next = $('.flow--slider-indicator-next');
    const slideLength = $slide.length;
    let currentIndex = 0;
    let slideMarginLeft = parseInt($slide.css('margin-left'), 10);
    let slideWidth = $slide.outerWidth() + slideMarginLeft +60;
    console.log((currentIndex) * -(slideWidth));
    console.log (slideMarginLeft);

    //スライドアニメーション
    function changeSlide() {

      console.log('slideLength'+slideLength);
      console.log('slideWidth'+slideWidth);
      const duration = 300;
      console.log('currentIndex'+currentIndex);


      function maxSlide() {
        console.log('max');

      }

      function minSlide() {
        console.log('min');
        currentIndex = 0;
        $slides.animate({
          left: 5 + '%'
        },duration);
      }


      if(currentIndex >= 0 && currentIndex <=4 ) {

        let margin = currentIndex * 6;
        if(currentIndex == 2) {
          margin = margin + 5;
        }else if(currentIndex == 3) {
          margin = margin + 10;
        }else if (currentIndex== 4) {
          margin = margin + 15;
        }

        $slides.animate({
          left: (currentIndex) * -90 -margin + '%'
        },duration);
      }

      else if(currentIndex == 5){
        currentIndex--;
        maxSlide();
      }

      else if(currentIndex == -1) {
        console.log('-1の時はいる');
        currentIndex++;
        minSlide();
      }


    }


    //prevボタンの処理
    function prevSlide() {
      if(!$prev.is(':animated')){
        currentIndex--;
        changeSlide();
      }
    }
    //nextボタンの処理
    function nextSlide() {
      if(!$next.is(':animated')){
        currentIndex++;
        changeSlide();
      }
    }

    //クリック、マウスイベント群
    function setEvent() {
      console.log('event');

      $prev.on('click', prevSlide);
      $next.on('click', nextSlide);
    }

    //初期発火イベント群
    function init() {
      setEvent();
    }
    //init発火
    init();
  }
  //slider発火
  slider();
});

