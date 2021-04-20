function changingMode() {
    let el = document.getElementById("mode");
    if (el.innerText == "Dark mode") {
        el.innerText = "Light mode";
        darkMode();
    } else {
        el.innerText = "Dark mode";
        lightMode();
    }
}

function darkMode() {
    $("nav").removeClass("bg-light").removeClass("navbar-light").addClass("bg-dark").addClass("navbar-dark");
    $(".cream-overlay").css("background-color", "rgba(0, 0, 0, 0.5)");
    $("#about").removeClass("bg-light").addClass("bg-dark").css("color", "#fafafa");
    $(".charity-btn").css("color","#fafafa");
    $("#location").removeClass("bg-location").addClass("bg-location-dark");
    $("#contact").removeClass("bg-light").addClass("bg-dark").css("color", "#fafafa");
    $(".form-btn").css("color", "#fafafa");
    $("#footer").removeClass("bg-footer").addClass("bg-footer-dark");
};

function lightMode() {
    $("nav").removeClass("bg-dark").removeClass("navbar-dark").addClass("bg-light").addClass("navbar-light");
    $(".cream-overlay").css("background-color", "rgba(17, 17, 16, 0.4)");
    $("#about").removeClass("bg-dark").addClass("bg-light").css("color", "#212529");
    $(".charity-btn").css("color","#212529");
    $("#location").removeClass("bg-location-dark").addClass("bg-location");
    $("#contact").removeClass("bg-dark").addClass("bg-light").css("color", "#212529");
    $(".form-btn").css("color","#212529");
    $("#footer").removeClass("bg-footer-dark").addClass("bg-footer");
}