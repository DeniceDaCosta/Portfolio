// Scrolling Effect

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('h1').addClass('fadeout');
    }

    else {
          $('h1').removeClass('fadeout');
    }
})