(function ($) {
  "use strict"; // Start of use strict

  // code from https://www.w3schools.com/bootstrap/bootstrap_ref_js_scrollspy.asp

  // Add scrollspy to <body>
  $('div#page-top').scrollspy({
    target: "#sideNav",
    offset: 50
  });

  // Add smooth scrolling on all links inside the navbar
  $(".navbar-nav a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body, div#page-top').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });

    } // End if

  });

  // enable bootstrap tooltip
  $('[data-toggle="tooltip"]').tooltip();

})(jQuery); // End of use strict
