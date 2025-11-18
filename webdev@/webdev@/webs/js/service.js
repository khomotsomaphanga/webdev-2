// Wait for the page to fully load
document.addEventListener("DOMContentLoaded", function () {

    console.log("Services page script loaded successfully.");

    // ------------------------------------------------------
    // HIGHLIGHT CURRENT PAGE IN NAVIGATION
    // ------------------------------------------------------
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active-link");
        }
    });

    // ------------------------------------------------------
    // HOVER EFFECT FOR SERVICES LIST
    // ------------------------------------------------------
    const services = document.querySelectorAll("ul li");

    services.forEach(service => {
        service.style.cursor = "pointer";
        service.style.transition = "0.3s";

        service.addEventListener("mouseover", () => {
            service.style.color = "orange";
            service.style.fontWeight = "bold";
            service.style.transform = "translateX(5px)";
        });

        service.addEventListener("mouseout", () => {
            service.style.color = "black";
            service.style.fontWeight = "normal";
            service.style.transform = "translateX(0)";
        });

        // Alert message when service is clicked
        service.addEventListener("click", () => {
            alert("You selected: " + service.textContent.trim());
        });
    });

    // ------------------------------------------------------
    // IMAGE HOVER ZOOM EFFECT
    // ------------------------------------------------------
    const images = document.querySelectorAll("img");

    images.forEach(img => {
        img.style.transition = "0.3s";

        img.addEventListener("mouseover", () => {
            img.style.transform = "scale(1.05)";
        });

        img.addEventListener("mouseout", () => {
            img.style.transform = "scale(1)";
        });
    });

    // ------------------------------------------------------
    // SCROLL TO TOP BUTTON
    // ------------------------------------------------------
    const scrollBtn = document.createElement("button");
    scrollBtn.textContent = "↑ Top";
    scrollBtn.id = "scrollTopBtn";

    document.body.appendChild(scrollBtn);

    // Button styling
    scrollBtn.style.position = "fixed";
    scrollBtn.style.bottom = "20px";
    scrollBtn.style.right = "20px";
    scrollBtn.style.padding = "10px 15px";
    scrollBtn.style.background = "orange";
    scrollBtn.style.color = "white";
    scrollBtn.style.border = "none";
    scrollBtn.style.borderRadius = "5px";
    scrollBtn.style.fontSize = "16px";
    scrollBtn.style.cursor = "pointer";
    scrollBtn.style.display = "none";
    scrollBtn.style.zIndex = "1000";

    // Show button on scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 150) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }
    });

    // Scroll to top
    scrollBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

});
zA
console.log("JavaScript is running!");

// Rest of your JavaScript code...
