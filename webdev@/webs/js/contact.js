// Wait for the page to fully load
document.addEventListener("DOMContentLoaded", function () {

    console.log("Contact page script loaded.");

    // ----------- CLICK TO COPY EMAIL -----------
    const emailElement = document.querySelector("p strong + text, p strong"); // fallback
    const emailParagraphs = document.querySelectorAll("p");

    let emailText = "info@sunshine.co.za";
    let phoneText = "+941-928-2000";

    // Detect correct paragraph for email
    emailParagraphs.forEach(p => {
        if (p.textContent.includes("info@sunshine.co.za")) {
            p.style.cursor = "pointer";
            p.addEventListener("click", () => {
                navigator.clipboard.writeText(emailText);
                alert("Email copied: " + emailText);
            });
        }
    });

    // ----------- CLICK TO COPY PHONE NUMBER -----------
    emailParagraphs.forEach(p => {
        if (p.textContent.includes(phoneText)) {
            p.style.cursor = "pointer";
            p.addEventListener("click", () => {
                navigator.clipboard.writeText(phoneText);
                alert("Phone number copied: " + phoneText);
            });
        }
    });

    // ----------- IMAGE HOVER EFFECT -----------
    const image = document.querySelector("img");

    if (image) {
        image.style.transition = "0.3s";

        image.addEventListener("mouseover", () => {
            image.style.transform = "scale(1.05)";
        });

        image.addEventListener("mouseout", () => {
            image.style.transform = "scale(1)";
        });
    }

    // ----------- IFRAME LOAD ERROR CHECK -----------
    const mapFrame = document.querySelector("iframe");

    if (mapFrame) {
        mapFrame.addEventListener("error", () => {
            alert("The map could not be loaded. Please check your internet connection.");
        });
    }

});
console.log("JavaScript is running!");

// Rest of your JavaScript code...
