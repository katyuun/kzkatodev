
// nav_btn
$('#sp_btn').on('click', function(){
	if($(this).hasClass('open')){
		$(this).removeClass('open');
		$(this).next('#sp_menu').removeClass('open');
	}else{
		$(this).addClass('open');
		$(this).next('#sp_menu').addClass('open');
	}
});

function inview_anime(){
  'use strict';
  $('.top--visual-lead').on('inview', function(event, isInView){
    if (isInView) {
      $(this).addClass('is-active');
    }else{
      //$(this).removeClass('is-active');
    }
  });
  $('.top--visual-front_text img').on('inview', function(event, isInView){
    if (isInView) {
      $(this).addClass('is-active');
    }else{
      //$(this).removeClass('is-active');
    }
  });
  $('.anime_img').on('inview', function(event, isInView){
    if (isInView) {
      $(this).addClass('is-active');
    }else{
      //$(this).removeClass('is-active');
    }
  });
}
inview_anime();

function EachTextAnimeControl() {
  $('.l_ttl .en').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("appeartext");

    } else {
      $(this).removeClass("appeartext");
    }
  });
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  EachTextAnimeControl();/* アニメーション用の関数を呼ぶ*/
});

$(window).on('load', function () {
  //spanタグを追加する
  var element = $(".l_ttl .en");
  element.each(function () {
    var text = $(this).text();
    var textbox = "";
    text.split('').forEach(function (t, i) {
      if (t !== " ") {
        if (i < 10) {
          textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
        } else {
          var n = i / 10;
          textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
        }

      } else {
        textbox += t;
      }
    });
    $(this).html(textbox);
  });

  EachTextAnimeControl();/* アニメーション用の関数を呼ぶ*/


//Android対応
if (navigator.userAgent.indexOf('Android') > 0) {
let body = document.getElementsByTagName('body')[0];
body.classList.add('Android');
}
});
