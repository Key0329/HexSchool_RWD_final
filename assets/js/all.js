"use strict";

$(document).ready(function () {
  $(".fa-bars").click(function (e) {
    event.preventDefault();
    console.log("click");
    $(".menu").toggleClass("menu_show");
  });
  $("body").click(function (e) {
    if (!$(e.target).hasClass("fa-bars")) {
      $(".menu").removeClass("menu_show");
      ;
    }
  });
});
//# sourceMappingURL=all.js.map
