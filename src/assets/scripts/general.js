$(document).ready(function() {
  $("body").css("opacity", "1");

  // Start at top
  $(window).on("unload", function() {
    $(window).scrollTop(0);
  });
});
