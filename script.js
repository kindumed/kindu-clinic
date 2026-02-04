console.log("Hello, KINDU Clinic!");
// Simple form submit message
const form = document.getElementById("appointmentForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function(e){
    e.preventDefault();
    message.textContent = "Thank you! Your appointment request has been received.";
    message.style.color = "green";
    form.reset();
});
// Appointment form submit message
const form = document.getElementById("appointmentForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function(e){
    e.preventDefault();
    message.textContent = "Thank you! Your appointment request has been received.";
    message.style.color = "green";
    form.reset();
});

// Highlight active navigation link on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        if(scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if(link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});
