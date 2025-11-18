// Ensure the page loads first
document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent reloading the page

        // Get form values
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const services = document.getElementById("services");
        const message = document.getElementById("message");

        // Clear old error styles
        name.style.border = email.style.border = message.style.border = "1px solid #ccc";

        let hasError = false;

        // Simple validation
        if (name.value.trim() === "") {
            name.style.border = "2px solid red";
            hasError = true;
        }

        if (email.value.trim() === "") {
            email.style.border = "2px solid red";
            hasError = true;
        }

        if (message.value.trim() === "") {
            message.style.border = "2px solid red";
            hasError = true;
        }

        if (hasError) {
            alert("Please fill in all required fields before submitting.");
            return;
        }

        // If all fields are filled correctly
        alert(
            "Thank you, " + name.value + "!\n\n" +
            "Your enquiry has been sent successfully.\n" +
            "We will contact you at: " + email.value
        );

        // Clear the form
        form.reset();

    });

    console.log("Enquiry form script loaded successfully.");
});
console.log("JavaScript is running!");

// Rest of your JavaScript code...
