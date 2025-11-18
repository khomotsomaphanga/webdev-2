// Wait until page loads
document.addEventListener("DOMContentLoaded", function () {

    // Fix incorrect <hearder> tag by warning the user
    if (!document.querySelector("header")) {
        console.warn("You used <hearder> instead of <header>. Consider fixing it in the HTML.");
    }

    // Highlight current page link in the navigation
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active-link");
        }
    });

    // Small greeting popup for the website
    function welcomeMessage() {
        alert("Welcome to Sunshine Tutoring Services! Enjoy 50% off your first lesson!");
    }

    // Show popup 2 seconds after page loads
    setTimeout(welcomeMessage, 2000);

    // Add hover animation to all images
    const images = document.querySelectorAll("main img");

    images.forEach(img => {
        img.addEventListener("mouseover", () => {
            img.style.transform = "scale(1.05)";
            img.style.transition = "0.3s";
        });

        img.addEventListener("mouseout", () => {
            img.style.transform = "scale(1)";
        });
    });

    // Simple console message for debugging
    console.log("Sunshine Tutoring Services website loaded successfully.");

});
