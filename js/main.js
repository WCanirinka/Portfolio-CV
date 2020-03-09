jQuery(document).ready(() => {
  // Logo animation
  const $logo = $("#logo");
  if (location.href.indexOf("#") !== -1) {
    $logo.show();
  }

  $(".menu .tabs a").click(() => {
    $logo.fadeIn("slow");
  });

  $(".tab-profile").click(() => {
    $logo.fadeOut("slow");
  });

  // Color manipulation
  $("#yellow-color").click(function(e) {
    $(".main-wrapper-resume").attr("id", "yellow");
  });

  $("#red-color").click(function(e) {
    $(".main-wrapper-resume").attr("id", "red");
  });

  $("#blue-color").click(function(e) {
    $(".main-wrapper-resume").attr("id", "blue");
  });

  $("#green-color").click(function(e) {
    $(".main-wrapper-resume").attr("id", "green");
  });

  $("#setting-icon").click(function(e) {
    $(".color-box").toggleClass("main");
  });

  // Portifolio items filtering
  const $catsfilter = $(".cats-filter");
  $catsfilter.find("a").click(function() {
    $(this)
      .parent()
      .parent()
      .find("a")
      .removeClass("current");
    $(this).addClass("current");
  });

  const $plist = $("#portifolio-list");
  const $pfilter = $("#portifolio-filter");

  $plist.isotope({
    filter: "*",
    layoutMode: "masonry",
    animationOptions: {
      duration: 750,
      easing: "linear"
    }
  });

  $pfilter.find("a").click(function() {
    const selector = $(this).attr("data-filter");
    $plist.isotope({
      filter: selector,
      layoutMode: "masonry",
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: false
      }
    });

    return false;
  });

  // Profile image animation
  $(".photo-inner ul").carouFredSel({
    direction: "left",
    circular: true,
    auto: true,
    scroll: {
      items: 1,
      fx: "crossfade",
      duration: 1500,
      wipe: true
    },
    swipe: {
      onTouch: true
    },
    items: {
      width: 153
    }
  });

  // Menu nav bar manipulation
  const $content = $("#content");

  $content.easytabs({
    animate: true,
    updateHash: false,
    transitionIn: "slideDown",
    transitionOut: "slideUp",
    animationSpeed: 600,
    tabs: ".tmenu",
    tabActiveClass: "active"
  });

  $content.find(".tabs li a").hover(
    function() {
      $(this)
        .stop()
        .animate({ marginTop: "-7px" }, 200);
    },
    function() {
      $(this)
        .stop()
        .animate({ marginTop: "0px" }, 300);
    }
  );
});
