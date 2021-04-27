let el = document.getElementById("mode");
el.addEventListener("click", function() {
    if (el.classList == "far fa-moon") {
        el.classList = "fas fa-moon";
        darkMode();
    } else {
        el.classList = "far fa-moon";
        lightMode();
    }
});

function darkMode() {
    $("nav").removeClass("bg-light").removeClass("navbar-light").addClass("bg-dark").addClass("navbar-dark");
    $(".cream-overlay").css("background-color", "rgba(0, 0, 0, 0.6)");
    $(".about").removeClass("btn-t").addClass("btn-info");
    $("#about").removeClass("bg-light").addClass("bg-dark").css("color", "#fafafa");
    $(".charity-and-submit").removeClass("button").addClass("btn-info");
    $("#location").removeClass("bg-location").addClass("bg-location-dark");
    $("#contact").removeClass("bg-light").addClass("bg-dark").css("color", "#fafafa");
    $("#footer").removeClass("bg-footer").addClass("bg-footer-dark");   
};

function lightMode() {
    $("nav").removeClass("bg-dark").removeClass("navbar-dark").addClass("bg-light").addClass("navbar-light");
    $(".cream-overlay").css("background-color", "rgba(17, 17, 16, 0.5)");
    $(".about").removeClass("btn-info").addClass("btn-t");
    $("#about").removeClass("bg-dark").addClass("bg-light").css("color", "#212529");
    $(".charity-and-submit").removeClass("btn-info").addClass("button");
    $("#location").removeClass("bg-location-dark").addClass("bg-location");
    $("#contact").removeClass("bg-dark").addClass("bg-light").css("color", "#212529");
    $("#footer").removeClass("bg-footer-dark").addClass("bg-footer");
};