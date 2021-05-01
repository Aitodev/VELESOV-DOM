$(function(){
    $('.slider__gallery').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        centerMode: true,
        centerPadding: "0",
        arrows: true,
      });
      $('.slider__process').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        centerMode: true,
        centerPadding: "0",
        arrows: true,
      });

      $('.nav__btn').on('click', function(){
        $('.header__list').slideToggle();
      })
});