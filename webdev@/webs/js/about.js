// Wait for the page to fully load
document.addEventListener("DOMContentLoaded", function () {

    console.log("About Us page script loaded successfully.");


    // ------------- HIGHLIGHT CURRENT PAGE IN NAV -------------
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active-link");
        }
    });


    // ------------- FADE-IN EFFECT FOR PARAGRAPHS -------------
    const paragraphs = document.querySelectorAll("div p");

    paragraphs.forEach((p, index) => {
        p.style.opacity = "0";
        p.style.transform = "translateY(10px)";
        p.style.transition = "opacity 0.6s ease, transform 0.6s ease";

        setTimeout(() => {
            p.style.opacity = "1";
            p.style.transform = "translateY(0)";
        }, 300 + (index * 200));
    });


    // ------------- IMAGE HOVER ZOOM EFFECT -------------
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


    // ------------- SCROLL TO TOP BUTTON -------------
    const scrollBtn = document.createElement("button");
    scrollBtn.textContent = "↑ Top";
    scrollBtn.id = "scrollTopBtn";

    document.body.appendChild(scrollBtn);

    // Style button
    scrollBtn.style.position = "fixed";
    scrollBtn.style.bottom = "20px";
    scrollBtn.style.right = "20px";
    scrollBtn.style.padding = "10px 14px";
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

    scrollBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

});
console.log("JavaScript is running!");

// Rest of your JavaScript code...
