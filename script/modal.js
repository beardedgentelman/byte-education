$('.modal-overlay').on('click', function (e) {
    if ($(e.target).closest('.modal').length == 0) {
        $(this).fadeOut()
    }
})

$('.close').on('click', function () {
    $(this).toggleClass('active__modal');
})


$('.close').on('click', function () {
    $(this).parents('.modal-overlay').fadeOut()
})

$('#modal-button').on('click', function () {
    $('.modal-overlay').fadeIn();
})

$(window).scroll(function () {
    if ($(this).scrollTop() > 500){
        $('#up').fadeIn();
    } else {
        $('#up').fadeOut();
    }
})

$('#up').on('click', function () {
    $('html, body').animate({scrollTop: 0}, 400)
})

$('#home').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $('.about').offset().top }, 400);
    $('.checkbox').prop('checked', false);
})

$('#stories').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $('.carousel-block').offset().top }, 400);
    $('.checkbox').prop('checked', false);
})

$('.opacity_button').on('click', function () {
    $('html, body').animate({scrollTop: $('.what-is').offset().top}, 1000)
})