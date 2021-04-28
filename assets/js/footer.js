function whenArrive() {
    let button = document.getElementById("arrive");
    button.addEventListener("click", function() {
        displayTime();
    });
};

function closeButton() {
    let button = document.getElementById("close");
    button.addEventListener("click", function() {
        removeText();
    })
}
//Code was taken from Java Script tutorial and changed for this project needs.

function displayTime() {
    let el = document.getElementById("time");
    let now = new Date();
    el.innerText = `You arrived on ${now}`;
};

function removeText() {
    let el = document.getElementById("time");
    el.innerText = ``;
};

whenArrive();

closeButton();