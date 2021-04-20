// Code was taken from Resume tutorial and changed for this project needs.

function sendMail(contactForm) {
    emailjs.send("service_gddlhne","green-feet", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "send_message": contactForm.messagesummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            let el = document.getElementById("form-submit");
            el.innerText = "Message Sent";
        },
        function(error) {
            console.log("FAILED", error);
        }
        )
    return false; // To block from loading a new page
}