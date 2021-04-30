//Code was taken from Java Script tutorial.

function showDateTime() {
    document.addEventListener("DOMContentLoaded", function() {
        displayTime();
    });
};

function displayTime() {
    let el = document.getElementById("time");
    let now = new Date();
    el.innerText = `This page was loaded on ${now}.`;
};

showDateTime();