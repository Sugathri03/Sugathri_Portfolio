document.addEventListener("DOMContentLoaded", function () {
    // ✅ Open Resume in a New Tab
    document.getElementById("showResume").addEventListener("click", function () {
        window.open("assets/Sugathri_Resume_Work.pdf", "_blank");
    });

    // ✅ Smooth Scroll for Navigation Links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // ✅ Project Button Click Alert
    document.querySelectorAll(".view-project").forEach(button => {
        button.addEventListener("click", function () {
            alert("Project details coming soon!");
        });
    });
});
