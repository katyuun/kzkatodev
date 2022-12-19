$(function(){
  // $('.job--description-details-title').on('click', function(){
  //   let index = $('.job--description-details-title').index(this);

  //   $('.job--description-table').removeClass('is-active');
  //   $('.job--description-details-title').removeClass('is-tab-active');
  //   $(this).addClass('is-tab-active');
  //   $('.job--description-table').eq(index).addClass('is-active');
  // });

  if (window.matchMedia('(max-width: 768px)').matches) {
		return;
  } else {
    $('.job--description-details-title').on('click', function(){
      let index = $('.job--description-details-title').index(this);
      $('.job--description-table').removeClass('is-active');
      $('.job--description-details-title').removeClass('is-tab-active');
      $(this).addClass('is-tab-active');
      $('.job--description-table').eq(index).addClass('is-active');
    });
  }
});
