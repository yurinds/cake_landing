$(function () {
  $('.button-crimson').click(function () {
    var id = $(this).attr('href');

    $('html, body').animate({
      scrollTop: ($(id).offset().top - 76)
    }, 500);
    return false;
  });
});