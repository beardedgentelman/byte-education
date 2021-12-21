$('.about-items-div').on('click', function () {
    $(this).children('.about-position').toggleClass('toggleColor');
    $(this).children('.about-discription').toggleClass('toggleColor');
    $(this).children('.about-icon').toggleClass('active').toggleClass('toggleColor');
    $(this).parent('.about-items').toggleClass('toggleBg');
    $(this).toggleClass('toggleColor');
    $(this).next('p').slideToggle(300).toggleClass('toggleColor')
})

$('.about-mobile__container').on('click', function () {
    $(this).find('.about-mobile__position').toggleClass('toggleColor-mobile');
    $(this).find('.about-mobile__discription').toggleClass('toggleColor-mobile');
    $(this).find('.about-mobile__icon').toggleClass('active').toggleClass('toggleColor-mobile');
    $(this).parent('.about-mobile').toggleClass('toggleBg-mobile');
    $(this).find('.about-mabile__icon-container').toggleClass('toggleBg-mobile');
    $(this).toggleClass('toggleColor-mobile');
    $(this).next('.about-mobile__text').slideToggle(300).toggleClass('toggleColor-mobile')
})

$('.logos-container').clone().insertAfter('.block-with-categories');


$(document).ready(function () {
    $('.slider').slick({
        centerMode: true,
        dots: true,
        adaptiveHeight: false,
        fade: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2500,
        slideToShow: 1,
        slideToScroll: 1,
        speed: 1500,
        waitForAnimate: false,
        responsive: [
            {
                breakpoint: 320,
                settings: {
                    adaptiveHeight: true
                }
            }
        ]
    });
})