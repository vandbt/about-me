jQuery(function () {
  "use strict"; // Start of use strict

  (function ($) {
    // code from https://www.w3schools.com/bootstrap/bootstrap_ref_js_scrollspy.asp

    // Add scrollspy to <body>
    $('body').scrollspy({
      target: ".navbar",
      offset: 50
    });

    // Add smooth scrolling on all links inside the navbar
    $("#navbarSupportedContent a").on('click', function (event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {

        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function () {

          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });

      } // End if

    });

    // enable bootstrap tooltip
    // $('[data-toggle="tooltip"]').tooltip();

  })(jQuery);

}); // End of use strict
