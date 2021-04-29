// The code inside of function below was taken from Animate.css library. 
// It was done with JavaScript to change a duration time.

function reflexologyTreatment() {
    const element = document.querySelector(".bring-to-attention");
    element.classList.add('animate__animated', 'animate__flash');
    element.style.setProperty('--animate-duration', '6s');
};

reflexologyTreatment();

