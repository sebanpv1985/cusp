(function ($) {
  "use strict"; // Start of use strict

  $(document).ready(function () {
    console.log("script here");
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 150) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });
})(jQuery); // End of use strict
