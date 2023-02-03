/*
  [JS Index]
*/

/*
  1. preloader
  2. navigation
    2.1. navigation page scroll
  3. animate elements
  4. facts counter
  5. owl carousel
  6. chart skills
  7. skills bar
  8. magnificPopup
  9. swiper slider
  10. contact form
    10.1. contact modal
*/

$(function () {
  'use strict';

  $(window).on('load', function () {
    // 1. preloader
    $('#preloader').fadeOut(600);
    $('.preloader-bg').delay(400).fadeOut(600);
  });

  // 2. navigation
  $('body').scrollspy({
    target: '.navbar',
    offset: 82,
  });
  $('.navbar-collapse ul li a.page-scroll').on('click', function () {
    $('.navbar-toggle:visible').click();
  });
  // 2.1. navigation page scroll
  $('a[href*="#"]:not([href="#"])').on('click', function () {
    console.log('click');
    if (
      location.pathname.replace(/^\//, '') ==
        this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=" + this.hash.slice(1) + "]');
      if (target.length) {
        if ($(window).width() < 768) {
          $('html, body').animate(
            {
              scrollTop: target.offset().top - 81,
            },
            1000
          );
        } else {
          $('html, body').animate(
            {
              scrollTop: target.offset().top - 81,
            },
            1000
          );
        }
        return false;
      }
    }
  });

  $(window).on('scroll', function () {
    // 3. animate elements
    if ($(this).scrollTop() > 50) {
      $('.to-top-arrow').addClass('show');
      $('.navbar-bg-switch').addClass('navbar-bg-switch-color');
      $('.main-navigation-bg').addClass('main-navigation-bg-position-primary');
      $('.navbar-collapse').addClass('navbar-collapse-position-primary');
      $('.main-navigation').addClass('main-navigation-home-call');
      $('.navbar-bg-switch').addClass('main-navigation-bg');
    } else {
      $('.to-top-arrow').removeClass('show');
      $('.navbar-bg-switch').removeClass('navbar-bg-switch-color');
      $('.main-navigation-bg').removeClass(
        'main-navigation-bg-position-primary'
      );
      $('.navbar-collapse').removeClass('navbar-collapse-position-primary');
      $('.main-navigation').removeClass('main-navigation-home-call');
      $('.navbar-bg-switch').removeClass('main-navigation-bg');
    }
  });

  // 4. facts counter
  $('.facts-counter-number, .facts-counter-number-years').appear(function () {
    var count = $(this);
    count.countTo({
      from: 0,
      to: count.html(),
      speed: 1200,
      refreshInterval: 60,
    });
  });

  // 5. owl carousel
  $('#owl-carousel-testimonials').owlCarousel({
    loop: true,
    center: true,
    items: 1,
    margin: 0,
    autoplay: true,
    autoplaySpeed: 1000,
    autoplayTimeout: 4000,
    smartSpeed: 450,
    nav: false,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
  });
  $('#owl-carousel-works').owlCarousel({
    loop: false,
    center: false,
    autoplay: false,
    autoplaySpeed: 1000,
    autoplayTimeout: 5000,
    smartSpeed: 450,
    nav: false,
    nav: true,
    navText: [
      "<i class='ion-chevron-left'></i>",
      "<i class='ion-chevron-right'></i>",
    ],
    navContainer: '.owl-nav-custom-works',
    items: 1,
    margin: 0,
  });
  $('#owl-carousel-news').owlCarousel({
    loop: false,
    center: false,
    autoplay: false,
    autoplaySpeed: 1000,
    autoplayTimeout: 5000,
    smartSpeed: 450,
    nav: false,
    nav: true,
    navText: [
      "<i class='ion-chevron-left'></i>",
      "<i class='ion-chevron-right'></i>",
    ],
    navContainer: '.owl-nav-custom-news',
    items: 1,
    margin: 0,
  });
  $('#owl-carousel-team').owlCarousel({
    loop: false,
    center: false,
    autoplay: false,
    autoplaySpeed: 1000,
    autoplayTimeout: 5000,
    smartSpeed: 450,
    nav: false,
    nav: true,
    navText: [
      "<i class='ion-chevron-left'></i>",
      "<i class='ion-chevron-right'></i>",
    ],
    navContainer: '.owl-nav-custom-team',
    responsive: {
      0: {
        items: 1,
        margin: 30,
      },
      768: {
        items: 2,
        margin: 50,
      },
      980: {
        items: 2,
        margin: 50,
      },
      1240: {
        items: 3,
        margin: 50,
      },
    },
  });
  $('#owl-carousel-news-1').owlCarousel({
    loop: false,
    center: false,
    autoplay: false,
    autoplaySpeed: 1000,
    autoplayTimeout: 5000,
    smartSpeed: 450,
    nav: false,
    nav: true,
    navText: [
      "<i class='ion-chevron-left'></i>",
      "<i class='ion-chevron-right'></i>",
    ],
    navContainer: '.owl-nav-custom-news-all.owl-nav-custom-news-1',
    responsive: {
      0: {
        items: 1,
        margin: 15,
      },
      768: {
        items: 1,
        margin: 50,
      },
      980: {
        items: 1,
        margin: 50,
      },
      1240: {
        items: 2,
        margin: 50,
      },
    },
  });
  $('#owl-carousel-news-2').owlCarousel({
    loop: false,
    center: false,
    autoplay: false,
    autoplaySpeed: 1000,
    autoplayTimeout: 5000,
    smartSpeed: 450,
    nav: false,
    nav: true,
    navText: [
      "<i class='ion-chevron-left'></i>",
      "<i class='ion-chevron-right'></i>",
    ],
    navContainer: '.owl-nav-custom-news-all.owl-nav-custom-news-2',
    responsive: {
      0: {
        items: 1,
        margin: 15,
      },
      768: {
        items: 1,
        margin: 50,
      },
      980: {
        items: 1,
        margin: 50,
      },
      1240: {
        items: 2,
        margin: 50,
      },
    },
  });
  $('#owl-carousel-news-3').owlCarousel({
    loop: false,
    center: false,
    autoplay: false,
    autoplaySpeed: 1000,
    autoplayTimeout: 5000,
    smartSpeed: 450,
    nav: false,
    nav: true,
    navText: [
      "<i class='ion-chevron-left'></i>",
      "<i class='ion-chevron-right'></i>",
    ],
    navContainer: '.owl-nav-custom-news-all.owl-nav-custom-news-3',
    responsive: {
      0: {
        items: 1,
        margin: 15,
      },
      768: {
        items: 1,
        margin: 50,
      },
      980: {
        items: 1,
        margin: 50,
      },
      1240: {
        items: 2,
        margin: 50,
      },
    },
  });
  $('#owl-carousel-news-4').owlCarousel({
    loop: false,
    center: false,
    autoplay: false,
    autoplaySpeed: 1000,
    autoplayTimeout: 5000,
    smartSpeed: 450,
    nav: false,
    nav: true,
    navText: [
      "<i class='ion-chevron-left'></i>",
      "<i class='ion-chevron-right'></i>",
    ],
    navContainer: '.owl-nav-custom-news-all.owl-nav-custom-news-4',
    responsive: {
      0: {
        items: 1,
        margin: 15,
      },
      768: {
        items: 1,
        margin: 50,
      },
      980: {
        items: 1,
        margin: 50,
      },
      1240: {
        items: 2,
        margin: 50,
      },
    },
  });

  // 6. chart skills
  $('.chart-appear-skills').appear(function () {
    $('.chart-skills').easyPieChart({
      easing: 'easeOutBounce',
      onStep: function (from, to, percent) {
        $(this.el).find('.percent-skills').text(Math.round(percent));
      },
    });
  });

  // 7. skills bar
  $('.show-skillbar').appear(function () {
    $('.skillbar').skillBars({
      from: 0,
      speed: 4000,
      interval: 100,
      decimals: 0,
    });

    $('.skillbar').on('click', function (e) {
      const imgSrc = $(this).attr('imgSrc');
      $('#model-image').removeClass('carousel-item-news-01');
      $('#model-image').removeClass('carousel-item-news-02');
      $('#model-image').removeClass('carousel-item-news-03');

      $('#model-image').addClass('carousel-item-news-' + imgSrc);
    });
  });

  // 8. magnificPopup
  $('.popup-photo').magnificPopup({
    type: 'image',
    gallery: {
      enabled: false,
      tPrev: '',
      tNext: '',
      tCounter: '%curr% / %total%',
    },
    removalDelay: 100,
    mainClass: 'mfp-fade',
    fixedContentPos: false,
  });
  $('.popup-photo-gallery, .popup-photo-gallery-2').each(function () {
    $(this).magnificPopup({
      delegate: 'a',
      type: 'image',
      gallery: {
        enabled: true,
      },
      removalDelay: 100,
      mainClass: 'mfp-fade',
      fixedContentPos: false,
    });
  });

  // 9. swiper slider
  var swiper = new Swiper('.swiper-container-wrapper .swiper-container', {
    preloadImages: false,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    init: true,
    loop: false,
    speed: 1200,
    grabCursor: true,
    mousewheel: false,
    keyboard: true,
    simulateTouch: true,
    parallax: true,
    effect: 'slide',
    pagination: false,
    navigation: {
      nextEl: '.slide-next',
      prevEl: '.slide-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
  });
  swiper.on('slideChangeTransitionStart', function () {
    $('.slider-progress-bar').removeClass('slider-active');
    $('.hero-bg')
      .find('video')
      .each(function () {
        this.pause();
      });
  });
  swiper.on('slideChangeTransitionEnd', function () {
    $('.slider-progress-bar').addClass('slider-active');
    $('.hero-bg')
      .find('video')
      .each(function () {
        this.play();
      });
  });
  swiper.on('slideChangeTransitionStart', function () {
    $('.slider-progress-bar').removeClass('slider-active');
  });
  swiper.on('slideChangeTransitionEnd', function () {
    $('.slider-progress-bar').addClass('slider-active');
  });
  var playButton = $('.swiper-slide-controls-play-pause-wrapper');
  function autoEnd() {
    playButton.removeClass('slider-on-off');
    swiper.autoplay.stop();
  }
  function autoStart() {
    playButton.addClass('slider-on-off');
    swiper.autoplay.start();
  }
  playButton.on('click', function () {
    if (playButton.hasClass('slider-on-off')) autoEnd();
    else autoStart();
    return false;
  });

  // 10. contact form
  $('form#form').on('submit', function () {
    $('form#form .error').remove();
    var s = !1;
    if (
      ($('.requiredField').each(function () {
        if ('' === jQuery.trim($(this).val()))
          $(this).prev('label').text(),
            $(this)
              .parent()
              .append('<span class="error">This field is required</span>'),
            $(this).addClass('inputError'),
            (s = !0);
        else if ($(this).hasClass('email')) {
          var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
          r.test(jQuery.trim($(this).val())) ||
            ($(this).prev('label').text(),
            $(this)
              .parent()
              .append('<span class="error">Invalid email address</span>'),
            $(this).addClass('inputError'),
            (s = !0));
        }
      }),
      !s)
    ) {
      $('form#form input.submit').fadeOut('normal', function () {
        $(this).parent().append('');
      });
      var r = $(this).serialize();
      $.post($(this).attr('action'), r, function () {
        $('form#form').slideUp('fast', function () {
          $(this).before(
            '<div class="success">Your email was sent successfully.</div>'
          );
        });
      });
    }
    return !1;
  });
  // 10.1. contact modal
  $('.contact-modal-launcher, .contact-modal-closer').on('click', function (e) {
    e.preventDefault();
    if ($('.contact-modal').hasClass('open')) {
      $('.contact-modal').removeClass('open');
    } else {
      $('.contact-modal').addClass('open');
    }
  });
});
