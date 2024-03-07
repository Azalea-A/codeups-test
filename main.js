var swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 58,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 80,
      centeredSlides: true,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    formatFractionCurrent: function (n) {
      return '0' + n;
    },
    formatFractionTotal: function (n) {
      return '0' + n;
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

$('.fadeInUp').waypoint({
  handler: function (direction) {
    if (direction === 'down') {
      $(this.element).addClass('animate__fadeInUp');
      this.destroy();
    }
  },
  offset: '50%',
});

$('.fadeInRight').waypoint({
  handler: function (direction) {
    if (direction === 'down') {
      $(this.element).addClass('animate__fadeInRight');
      this.destroy();
    }
  },
  offset: '50%',
});

$('.fadeInLeft').waypoint({
  handler: function (direction) {
    if (direction === 'down') {
      $(this.element).addClass('animate__fadeInLeft');
      this.destroy();
    }
  },
  offset: '50%',
});

$(".accordion_title").on("click", function (e) {
  $(e.currentTarget).toggleClass("open");
  $(e.currentTarget).next().slideToggle();
  setTimeout(function () {
    Waypoint.refreshAll();
  }, 500);
});
$(".accordion_title").removeClass("open");
$(".accordion_title").next().hide();


$(".hamburger_icon").on("click", function (e) {
  $(".hamburger-nav").slideToggle();
});

$('a[href^=#]').click(function () {
  var href = $(this).attr('href');
  if ($(href).length) {
    var browserWidth = window.outerWidth;

    var fontSize = 10;
    var headerHeight = 7.6 * fontSize + fontSize;

    if (browserWidth < 768) {
      fontSize = 10 / 375 * browserWidth;
      headerHeight = 6 * fontSize;
    } else if (browserWidth < 1024) {
      fontSize = browserWidth / 100;
      headerHeight = 7.6 * fontSize + fontSize;
    }

    $('body,html').animate({
      scrollTop: $(href).offset().top - headerHeight
    }, 400, 'swing');
    $(".hamburger-nav").slideUp();
    return false;
  }
});