Index = {
  init: function () {
    // Mobile menu

    $(".btn-function").click(function (e) {
      e.preventDefault();
    });

    $(".menu-trigger").click(function (e) {
      $("header nav").toggle();
      e.stopPropagation();
    });

    // Header
    function resizeHeaderOnScroll() {
      var jsheader = $("#js-header");

      const distanceY =
          window.pageYOffset || document.documentElement.scrollTop,
        shrinkOn = 120;

      if (distanceY > shrinkOn) {
        jsheader.removeClass("home-header fade-in");
      } else {
        jsheader.addClass("home-header fade-in");
      }
    }

    window.addEventListener("scroll", resizeHeaderOnScroll);

    // Scroll links
    $(document).ready(function () {
      $(document).on("scroll", onScroll);

      //smoothscroll
      $('a[href^="#"]').on("click", function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $("a").each(function () {
          $(this).removeClass("on-section");
        });
        $(this).addClass("on-section");

        var target = this.hash,
          menu = target;
        $target = $(target);
        $("html, body")
          .stop()
          .animate(
            {
              scrollTop: $target.offset().top + 2,
            },
            500,
            "swing",
            function () {
              window.location.hash = target;
              $(document).on("scroll", onScroll);
            }
          );
      });

      $('a[href^="/"]').on("click", function (e) {
        e.preventDefault();
        $("a").each(function () {
          $(this).removeClass("on-section");
        });
        $(this).addClass("on-section");
        $("html, body").animate({ scrollTop: 0 }, "slow");
        window.location.hash = "";
      });
    });

    function onScroll(event) {
      var scrollPos = $(document).scrollTop();
      $("#js-header a").each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (
          refElement.position().top <= scrollPos &&
          refElement.position().top + refElement.height() > scrollPos
        ) {
          $("#js-header .holder nav ul li a").removeClass("on-section");
          currLink.addClass("on-section");
        } else {
          currLink.removeClass("on-section");
        }
      });
    }
  },
};

$(document).ready(function () {
  Index.init();
});
