/* Dependency: js-cookie plugin - Ref: https://github.com/js-cookie/js-cookie */



$(document).ready(function () {
  //$('.spinner-border').fadeOut(3000);
  setThemeFromCookie();

  function setThemeFromCookie() {
    // Check if the cookie is set
    if (typeof Cookies.get("mode") !== "undefined") {
      $("body").addClass("dark-mode");
      $("#darkmode").attr("checked", true); // toggle change
      console.log("Cookie: dark mode");
    } else {
      $("body").removeClass("dark-mode");
      $("#darkmode").attr("checked", false); // toggle change
      console.log("Cookie: light mode");
    }
  }

  $("#darkmode").on("change", function (e) {
    if ($(this).is(":checked")) {
      $("body").addClass("dark-mode");
      //Set cookies for 7 days
      Cookies.set("mode", "dark-mode", { expires: 7 });
    } else {
      $("body").removeClass("dark-mode");
      //Remove cookies
      Cookies.remove("mode");
    }
  });
});


window.addEventListener("load", function () {
  var hideloader = document.getElementsByClassName("loader");
  hideloader[0].classList.add("hidden");
});
