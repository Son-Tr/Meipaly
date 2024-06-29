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
          slidesToShow: 2
        }
      }
    ]
  })
})

/* -------------------------------- fancybox -------------------------------- */
$('.fancybox').fancybox({
  loop: true,
});

/* --------------------------------- countup -------------------------------- */
$(document).ready(function () {
  $(".counter").counterUp({
  });
});

/* ------------------------------- back to top ------------------------------ */
// Scroll Back to Top Button Show
window.addEventListener('scroll', function () {
  if (window.scrollY > 400) {
    document.getElementById('back-to-top').style.display = 'block';
  } else {
    document.getElementById('back-to-top').style.display = 'none';
  }
});

// Click event scroll to top button
document.getElementById('back-to-top').addEventListener('click', function (event) {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ------------------------------- event open and close nabar ------------------------------- */

const icon = document.querySelectorAll(".icon");
icon.forEach(icon => {
  icon.addEventListener("click", () => {
    document.querySelector(".icon-open").classList.toggle("hidden");
    document.querySelector(".icon-close").classList.toggle("hidden");
    if( document.querySelector(".icon-open").classList.contains("hidden")){
      document.querySelector(".list-header").classList.toggle("show");
      document.querySelector(".header").classList.toggle("blur")
    }else{
      document.querySelector(".list-header").classList.toggle("show");
      document.querySelector(".header").classList.toggle("blur")
    }
  })
})
