document.getElementById("signInBtn").addEventListener("click", function() {
    window.location.href = "nova test3.html";
});

// Floating effect on welcome-box
document.querySelector(".welcome-box").addEventListener("mouseenter", function() {
    this.style.transform = "translateY(-5px)";
    this.style.transition = "transform 0.3s ease-in-out";
});
document.querySelector(".welcome-box").addEventListener("mouseleave", function() {
    this.style.transform = "translateY(0)";
});

// Smooth fade-in effect for input fields
document.querySelectorAll(".input-group input").forEach(input => {
    input.addEventListener("focus", function() {
        this.style.boxShadow = "0px 0px 10px rgba(255, 193, 7, 0.7)";
    });
    input.addEventListener("blur", function() {
        this.style.boxShadow = "none";
    });
});
