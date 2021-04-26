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

            //This code was written by my mentor to prevent a console error and change inner text after two seconds.
            let timeoutRef = setTimeout(function() {
                el.innerText = "Submit";
                clearTimeout(timeoutRef);
            }, 2000);
        },
        function(error) {
            console.log("FAILED", error);
        }
        )
    return false; // To block from loading a new page
}