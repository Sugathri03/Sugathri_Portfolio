// Smooth scrolling
// document.querySelectorAll('nav ul li a').forEach(anchor => {
//     anchor.addEventListener('click', function(event) {
//         event.preventDefault();
//         document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
//     });
// });

// // Resume Modal
// document.getElementById("showResume").addEventListener("click", function() {
//     document.getElementById("resumeModal").style.display = "block";
// });

// document.querySelector(".close").addEventListener("click", function() {
//     document.getElementById("resumeModal").style.display = "none";
// });

document.addEventListener("DOMContentLoaded", function () {
    let button = document.getElementById("knowMore");

    if (button) {
        console.log("Know More button found!");

        // Use "mousedown" instead of "click" (Safari prefers this)
        button.addEventListener("mousedown", function () {
            console.log("Button clicked! Attempting to open resume...");
            let newTab = window.open("assets/Sugathri_Resume_Work.pdf", "_blank");

            if (newTab) {
                console.log("Resume opened successfully!");
                newTab.focus();
            } else {
                console.error("Pop-up blocked! Allow pop-ups for this site.");
            }
        });
    } else {
        console.error("Know More button not found!");
    }
});



// Project Details Alert
// document.querySelectorAll('.view-project').forEach(button => {
//     button.addEventListener('click', function() {
//         alert("Project details coming soon!");
//     });
// });