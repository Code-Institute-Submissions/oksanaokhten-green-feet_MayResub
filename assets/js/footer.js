//Code was taken from Java Script tutorial

document.addEventListener("DOMContentLoaded", function() {
    displayTime();
    function displayTime() {
        let el = document.getElementById("time");
        let now = new Date();
        el.innerText = now;
    }
});