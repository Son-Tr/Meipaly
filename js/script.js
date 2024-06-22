/* ------------------------------- slick slide ------------------------------ */
$(document).ready(function () {
    $('.autoplay').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 4
                }
              },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                centerMode: true,
                slidesToShow: 1
              }
            }
          ]
    })
})