$(function(){

  function cssFunc() {
    return $(".menu").width();
  }


  $('.hamburger').on('click', function(){

    $('.is-active').css(
      'right',cssFunc
    );
    console.log(cssFunc);

    console.log('test');
    $('.menu').toggleClass('is-active');
    $('.contents').toggleClass('is-active');
  });
}
);