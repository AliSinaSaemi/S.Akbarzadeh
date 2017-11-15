/*=======================

        Global
 
=======================*/
$(window).click(function (e) {
  e.preventDefault();
});

/*=======================

        sticky nav
 
=======================*/
$(document).ready(function () {
  $(".navbar").sticky({
    topSpacing: 0
  });
});

/*=======================

        accordion.js
 
=======================*/
$(document).ready(function() {
  $('.collapse.in').prev('.panel-heading').addClass('active');
  $('#accordion, #bs-collapse')
    .on('show.bs.collapse', function(a) {
      $(a.target).prev('.panel-heading').addClass('active');
    })
    .on('hide.bs.collapse', function(a) {
      $(a.target).prev('.panel-heading').removeClass('active');
    });
});

/*=======================

        sidenav.js
 
=======================*/
$('.sa-header-button').click(function (e) {
  e.preventDefault();
  $('.cssmenu').addClass('cssmenuShow');
});

$('.sa-close-btn').click(function () {
  $('.cssmenu').removeClass('cssmenuShow');
});



/*=======================

        hide/ show
        nav
 
=======================*/
(function ($) {
  $(document).ready(function () {
    $('.cssmenu > ul > li > a').click(function () {
      $('.cssmenu li').removeClass('active');
      $(this).closest('li').addClass('active');
      var checkElement = $(this).next();
      if ((checkElement.is('ul')) && (checkElement.is(':visible'))) {
        $(this).closest('li').removeClass('active');
        checkElement.slideUp('normal');
      }
      if ((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
        $('.cssmenu ul ul:visible').slideUp('normal');
        checkElement.slideDown('normal');
      }
      if ($(this).closest('li').find('ul').children().length == 0) {
        return true;
      } else {
        return false;
      }
    });
  });
})(jQuery);