/* ------------------------------- slick slide ------------------------------ */
$(document).ready(function () {
    $('.autoplay').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
    })
})