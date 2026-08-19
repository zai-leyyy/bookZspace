const contactForm = document.getElementById("contactForm");


/* SUBMIT */

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Your message has been submitted!");

});


/* RESET */

contactForm.addEventListener("reset", function() {

    setTimeout(function() {
        alert("Your message has been reset.");
    }, 100);

});