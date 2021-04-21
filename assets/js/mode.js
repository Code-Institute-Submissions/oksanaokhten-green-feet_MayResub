function changingMode() {
    let el = document.getElementById("mode");
    if (el.innerText == "Dark mode") {
        el.innerText = "Light mode";
        darkMode();  
    } else {
        el.innerText = "Dark mode";
        lightMode();     
    }
};

function darkMode() {
    $("nav").removeClass("bg-light").removeClass("navbar-light").addClass("bg-dark").addClass("navbar-dark");
    $(".cream-overlay").css("background-color", "rgba(0, 0, 0, 0.5)");
    $("#about").removeClass("bg-light").addClass("bg-dark").css("color", "#fafafa");
    $(".charity-btn").removeClass("btn-outline-success").addClass("btn-light");
    $("#location").removeClass("bg-location").addClass("bg-location-dark");
    $("#contact").removeClass("bg-light").addClass("bg-dark").css("color", "#fafafa");
    $(".form-btn").removeClass("btn-outline-success").addClass("btn-info");
    $("#footer").removeClass("bg-footer").addClass("bg-footer-dark");   
};

function lightMode() {
    $("nav").removeClass("bg-dark").removeClass("navbar-dark").addClass("bg-light").addClass("navbar-light");
    $(".cream-overlay").css("background-color", "rgba(17, 17, 16, 0.4)");
    $("#about").removeClass("bg-dark").addClass("bg-light").css("color", "#212529");
    $(".charity-btn").removeClass("btn-light").addClass("btn-outline-success");
    $("#location").removeClass("bg-location-dark").addClass("bg-location");
    $("#contact").removeClass("bg-dark").addClass("bg-light").css("color", "#212529");
    $(".form-btn").removeClass("btn-info").addClass("btn-outline-success");
    $("#footer").removeClass("bg-footer-dark").addClass("bg-footer");
};