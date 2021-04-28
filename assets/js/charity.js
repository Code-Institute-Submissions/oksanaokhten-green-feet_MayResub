function charity() {
    let button = document.getElementById("charity");
    button.addEventListener("click", function() {
        amountCalculation(50, 0.075);
    });
};

function amountCalculation(clientPayment, partOfPayment) {
    let userAmount = parseInt(document.getElementById("input-amount").value);
    let amount = clientPayment * partOfPayment * userAmount;
    let el = document.getElementById("donation");
    el.innerText = `To the Fundraising went ${amount} euro.`;
};

charity();

// This code was taken from JS-Essential-Project and changed for my project needs.
function helpKids() {
    document.getElementById("input-amount").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            amountCalculation(50, 0.075);
        };
    });

    document.getElementById("input-amount").value = ""; // Erases the last typed answer
    document.getElementById("input-amount").focus(); // Puts the cursor in the answer box
};

helpKids();