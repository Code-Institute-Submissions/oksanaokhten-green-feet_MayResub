//Code for clinic rating

let one = document.getElementById("one");
one.addEventListener("click", function() {
    incrementCounter();
    addingRate(1);
    score();
});

let two = document.getElementById("two");
one.addEventListener("click", function() {
    incrementCounter();
    addingRate(2);
    score();
});

let three = document.getElementById("three");
one.addEventListener("click", function() {
    incrementCounter();
    addingRate(3);
    score();
});

let four = document.getElementById("four");
one.addEventListener("click", function() {
    incrementCounter();
    addingRate(4);
    score();
});

let two = document.getElementById("five");
one.addEventListener("click", function() {
    incrementCounter();
    addingRate(5);
    score();
});


function incrementCounter() {
    let peopleCounter = localStorage.getItem("counter") || 0;
    localStorage.setItem("counter", ++peopleCounter);
}

function addingRate(value) {
    let rateScore = localStorage.getItem("clinicRate") || 0;
    localStorage.setItem("clinicRate",rateScore += value);

}
function score() {
    let peopleCounter = localStorage.getItem("counter") || 0;
    let rateScore = localStorage.getItem("clinicRate") || 0;
    let score = rateScore/PeopleCounter;

    let el = document.getElementById("summary-rate");
    el.innerText = `Rated ${score}/5 based on ${peopleCounter} clients reviews.`
};