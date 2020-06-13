$(function(){
  
// モーダルウインドウ
var winScrollTop;
$('.js-modal-open').each(function(){
  $(this).on('click',function(){
      winScrollTop = $(window).scrollTop();
      var target = $(this).data('target');
      var modal = document.getElementById(target);
      $(modal).fadeIn();
      $('.up').hide();
      return false;
  });
});
$('.js-modal-close').on('click',function(){
    $('.js-modal').fadeOut();
    $('body,html').stop().animate({scrollTop:winScrollTop}, 100);
    return false;
}); 

// スムーススクロールボタン
$(window).scroll(function() {
    if ($(this).scrollTop()>480) {
        $('.up').fadeIn(240);
    } else {
        $('.up').fadeOut(200);
}});
$('a[href^="#"]').on('touchend click',function(smooth) {
    smooth.preventDefault();
    var href= $(this).attr('href');
    var target = $(href);
    var w = $(window).width();
    var x = 767;
    if (w <= x) {
        var position = target.offset().top-20;
    } else {
        var position = target.offset().top-40;
    }
    $('body,html').animate({scrollTop:position}, 300, 'swing');
    return false;
});
  
});
