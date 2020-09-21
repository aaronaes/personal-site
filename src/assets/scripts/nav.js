$(document).ready(function() {
  var didScroll;
  var lastScrollTop = 0;
  var delta = 0;
  var navbarHeight = $("nav").outerHeight();

  $(window).scroll(function() {
    didScroll = true;
  });

  setInterval(function() {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 0);

  function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta) return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
      // Scroll Down
      $("nav")
        .removeClass("nav-down")
        .addClass("nav-up");
    } else {
      // Scroll Up
      if (st + $(window).height() < $(document).height()) {
        $("nav")
          .removeClass("nav-up")
          .addClass("nav-down");
      }
    }

    lastScrollTop = st;
  }
});
