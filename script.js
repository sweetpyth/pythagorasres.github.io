// Show and hide the overlays for each section

document.getElementById("about-btn").addEventListener("click", function() {
    document.getElementById("about-overlay").style.display = "flex";
});

document.getElementById("projects-btn").addEventListener("click", function() {
    document.getElementById("projects-overlay").classList.add("active");
    document.getElementById("projects-overlay").style.display = "flex";
});

document.getElementById("contact-btn").addEventListener("click", function() {
    document.getElementById("contact-overlay").style.display = "flex";
});

// Close buttons
document.getElementById("close-about").addEventListener("click", function() {
    document.getElementById("about-overlay").style.display = "none";
});

document.getElementById("close-projects").addEventListener("click", function() {
    document.getElementById("projects-overlay").classList.remove("active");
    document.getElementById("projects-overlay").style.display = "none";
});

document.getElementById("close-contact").addEventListener("click", function() {
    document.getElementById("contact-overlay").style.display = "none";
});