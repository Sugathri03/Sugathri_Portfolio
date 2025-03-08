// Smooth scrolling
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Resume Modal
document.getElementById("Know More").addEventListener("click", function() {
    windows.open("https://github.com/Sugathri03/Sugathri_Portfolio/blob/master/Sugathri_Resume_Work%20.pdf","blank");
});

document.querySelector(".close").addEventListener("click", function() {
    document.getElementById("resumeModal").style.display = "none";
});

// Project Details Alert
document.querySelectorAll('.view-project').forEach(button => {
    button.addEventListener('click', function() {
        alert("Project details coming soon!");
    });
});