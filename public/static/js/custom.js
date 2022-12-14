!(function(e) {
  "use strict";
  var t = {},
    a = "static/plugin/";
  (e.fn.exists = function() {
    return this.length > 0;
  }),
    (t.PreLoad = function() {
      document.getElementById("loading").style.display = "none";
    }),
    (t.MenuClose = function() {
      e(".navbar-nav a").on("click", function() {
        e(".navbar-toggler").is(":visible") &&
          e(".navbar-collapse").collapse("hide");
      });
    }),
    (t.MenuTogglerClose = function() {
      e(".toggler-menu").on("click", function() {
        e(this).toggleClass("open"),
          e(".header-left")
            .stop()
            .toggleClass("menu-open menu-open-desk");
      }),
        e(".header-left a").on("click", function() {
          e(".toggler-menu").is(":visible") &&
            (e(".header-left").removeClass("menu-open"),
            e(".toggler-menu").removeClass("open"));
        });
    }),
    (t.HeaderFixd = function() {
      e(window).scrollTop() >= 100
        ? e("body").addClass("fixed-header")
        : e("body").removeClass("fixed-header");
    }),
    (t.OnePage = function() {
      e(
        '.header-left a[href*="#"]:not([href="#"]), .go-to a[href*="#"]:not([href="#"])'
      ).on("click", function() {
        if (
          location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") ||
          location.hostname == this.hostname
        ) {
          var t = e(this.hash);
          if (
            (t = t.length ? t : e("[name=" + this.hash.slice(1) + "]")).length
          )
            return (
              e("html,body").animate({ scrollTop: t.offset().top - -2 }, 1e3),
              !1
            );
        }
      }),
        e('.header-nav a[href*="#"]:not([href="#"])').on("click", function() {
          if (
            location.pathname.replace(/^\//, "") ==
              this.pathname.replace(/^\//, "") ||
            location.hostname == this.hostname
          ) {
            var t = e(this.hash);
            if (
              (t = t.length ? t : e("[name=" + this.hash.slice(1) + "]")).length
            )
              return (
                e("html,body").animate({ scrollTop: t.offset().top - 60 }, 1e3),
                !1
              );
          }
        });
    }),
    (t.OnePageTop = function() {
      e('.header-one-page a[href*="#"]:not([href="#"])').on(
        "click",
        function() {
          if (
            location.pathname.replace(/^\//, "") ==
              this.pathname.replace(/^\//, "") ||
            location.hostname == this.hostname
          ) {
            var t = e(this.hash);
            if (
              (t = t.length ? t : e("[name=" + this.hash.slice(1) + "]")).length
            )
              return (
                e("html,body").animate({ scrollTop: t.offset().top - 65 }, 1e3),
                !1
              );
          }
        }
      );
    }),
    (t.MegaMenu = function() {
      e(".m-dropdown-toggle").on("click", function() {
        e(this)
          .parent()
          .toggleClass("open-menu-parent"),
          e(this)
            .next("ul")
            .toggleClass("open-menu"),
          e(this).toggleClass("open");
      });
    }),
    (t.Counter = function() {
      var t = jQuery(".counter"),
        o = e(".counter");
      t.length > 0 &&
        n(a + "counter/jquery.countTo.js", function() {
          o.each(function() {
            var t = e(this);
            t.appear(function() {
              t.find(".count").countTo({ speed: 2e3, refreshInterval: 10 });
            });
          });
        });
    }),
    (t.Owl = function() {
      var t = jQuery("div.owl-carousel");
      t.length > 0 &&
        n(a + "owl-carousel/js/owl.carousel.min.js", function() {
          t.each(function() {
            var t = e(this),
              a = t.data("items") ? t.data("items") : 1,
              o = !t.attr("data-loop") || t.data("loop"),
              n = !!t.data("nav-dots") && t.data("nav-dots"),
              i = !!t.data("nav-arrow") && t.data("nav-arrow"),
              s = !t.attr("data-autoplay") || t.data("autoplay"),
              l = t.attr("data-autospeed") ? t.data("autospeed") : 5e3,
              r = t.attr("data-smartspeed") ? t.data("smartspeed") : 1e3,
              c = !!t.data("autoheight") && t.data("autoheight"),
              p = !!t.data("center") && t.data("center"),
              u = t.attr("data-space") ? t.data("space") : 30;
            e(this).owlCarousel({
              loop: o,
              items: a,
              responsive: {
                0: { items: t.data("xx-items") ? t.data("xx-items") : 1 },
                480: { items: t.data("xs-items") ? t.data("xs-items") : 1 },
                768: { items: t.data("sm-items") ? t.data("sm-items") : 1 },
                980: { items: t.data("md-items") ? t.data("md-items") : 1 },
                1200: { items: a },
              },
              dots: n,
              autoplayTimeout: l,
              smartSpeed: r,
              autoHeight: c,
              center: p,
              margin: u,
              nav: i,
              navText: [
                "<i class='ti-arrow-left'></i>",
                "<i class='ti-arrow-right'></i>",
              ],
              autoplay: s,
              autoplayHoverPause: !0,
            });
          });
        });
    }),
    (t.Gallery = function() {
      (e(".lightbox-gallery").exists() ||
        e(".popup-youtube, .popup-vimeo, .popup-gmaps").exists()) &&
        n(a + "magnific/jquery.magnific-popup.min.js", function() {
          e(".lightbox-gallery").exists() &&
            e(".lightbox-gallery").magnificPopup({
              delegate: ".gallery-link",
              type: "image",
              tLoading: "Loading image #%curr%...",
              mainClass: "mfp-fade",
              fixedContentPos: !0,
              closeBtnInside: !1,
              gallery: { enabled: !0, navigateByImgClick: !0, preload: [0, 1] },
            }),
            e(".popup-youtube, .popup-vimeo, .popup-gmaps").exists() &&
              e(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
                disableOn: 700,
                type: "iframe",
                mainClass: "mfp-fade",
                removalDelay: 160,
                preloader: !1,
                fixedContentPos: !1,
              });
        });
    }),
    (t.masonry = function() {
      var t = e(".portfolio-content");
      e(".portfolio-content").exists() &&
        n(a + "isotope/isotope.pkgd.min.js", function() {
          if (e(".portfolio-content").exists()) {
            e(t).isotope({
              resizable: !1,
              itemSelector: ".grid-item",
              layoutMode: "masonry",
              filter: "*",
            });
            var a = e(".filter li");
            e(a).on("click", function() {
              var a = e(this).attr("data-filter");
              t.isotope({ filter: a });
            }),
              e(a).on("click", function() {
                e(this)
                  .addClass("active")
                  .siblings()
                  .removeClass("active");
              });
          }
        });
    }),
    (t.ProgressBar = function() {
      e(".skill-bar .skill-bar-in").each(function() {
        var t = e(this).offset().top + e(this).outerHeight(),
          a = e(window).scrollTop() + e(window).height(),
          o = e(this).attr("aria-valuenow") + "%";
        a > t && e(this).css({ width: o });
      });
    }),
    (t.particles = function() {
      e("#particles-box").exists() &&
        (n(a + "particles/particles.min.js", function() {}),
        n(a + "particles/particles-app.js", function() {}));
    }),
    (t.scrollBar = function() {
      e(".scroll-bar").exists() &&
        n(a + "scroll/jquery.mCustomScrollbar.min.js", function() {
          e(".scroll-bar").mCustomScrollbar({ theme: "minimal" });
        });
    }),
    (t.mTypeIt = function() {
      e("#type-it").exists() &&
        n(a + "typeit-master/typeit.min.js", function() {
          new TypeIt("#type-it", {
            speed: 200,
            loop: !0,
            strings: ["Designer", "Developer"],
            breakLines: !1,
          });
        });
    });
  var o = {};
  function n(e, t) {
    if (o[e]) t && t();
    else {
      o[e] = !0;
      var a = document.getElementsByTagName("body")[0],
        n = document.createElement("script");
      (n.type = "text/javascript"),
        (n.src = e),
        (n.onload = t),
        a.appendChild(n);
    }
  }
  e(window).on("load", function() {
    t.masonry(), t.PreLoad();
  }),
    e(document).on("ready", function() {
      t.particles(),
        t.scrollBar(),
        t.HeaderFixd(),
        t.OnePage(),
        t.OnePageTop(),
        t.Counter(),
        t.MenuClose(),
        t.MenuTogglerClose(),
        t.Gallery(),
        t.MegaMenu(),
        t.ProgressBar(),
        t.mTypeIt(),
        t.Owl(),
        e('[data-toggle="tooltip"]').tooltip({ trigger: "hover" });
    }),
    e(window).on("scroll", function() {
      t.ProgressBar(), t.HeaderFixd();
    }),
    e(window).on("resize", function() {});
})(jQuery);
