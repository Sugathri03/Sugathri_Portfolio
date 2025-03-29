document.addEventListener("DOMContentLoaded", function () {
    // ✅ Open Resume in a New Tab
    document.getElementById("showResume").addEventListener("click", function () {
        window.open("assets/Sugathri_Work_Resume.pdf", "_blank");
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

    // ✅ "Know More" Modal Logic
    const knowMoreBtn = document.getElementById("knowMore");
    const knowMoreModal = document.getElementById("knowMoreModal");

    if (knowMoreBtn && knowMoreModal) {
        const closeBtn = knowMoreModal.querySelector(".close");

        knowMoreBtn.addEventListener("click", () => {
            knowMoreModal.style.display = "block";
        });

        closeBtn.addEventListener("click", () => {
            knowMoreModal.style.display = "none";
        });

        window.addEventListener("click", (e) => {
            if (e.target === knowMoreModal) {
                knowMoreModal.style.display = "none";
            }
        });
    }
});
