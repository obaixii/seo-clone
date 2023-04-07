// WINDOW RELOAD
// $(document).ready(function(){
//   $(this).scrollTop(0);
// });

// PRE LOADER
// setTimeout(function () {
//   $('.loader-bg').fadeToggle();
// }, 500);
// END OF PRE LOADER

// SCROLL TOP
var btn = $('#totop');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

function scrollToTop() {
  $(window).scrollTop(0);
}
btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, 'fast');
});

// Sticky NAVBAR
var sbi = $('#nvbrand');

$(window).scroll(function() {
  if ($(window).scrollTop() > 100) {
    sbi.addClass('navbar-scroll');
  } else {
    sbi.removeClass('navbar-scroll');
  }
});

// FIXED NAVBAR ON SCROLL
$(window).scroll(function () {

  // Write code here
  var scroll = $(window).scrollTop();
  if (scroll >= 200) {
    $(".header").addClass("header-scroll");
  } else {
    $(".header").removeClass("header-scroll");
  }
});

// END OF FIXED NAVBAR ON SCROLL

// AOS JS
AOS.init({
  once: true
})

// SLICK SLIDER x PORTFOLIO
$('.slider').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});