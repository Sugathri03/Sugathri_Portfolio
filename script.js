document.addEventListener("DOMContentLoaded", function () {
    // ✅ Smooth Scroll Fix
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // ✅ "Know More" Button Scroll to About Section
    document.getElementById("knowMore").addEventListener("click", function () {
        document.getElementById("about").scrollIntoView({ behavior: "smooth" });
    });

    // ✅ Resume Modal Handling
    const resumeButton = document.getElementById("showResume");
    const resumeModal = document.getElementById("resumeModal");

    resumeButton.addEventListener("click", function () {
        resumeModal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <embed src="documents/resume.pdf" width="100%" height="600px" />
            </div>
        `;
        resumeModal.style.display = "block";
    });

    // ✅ Close Modal on Click
    document.addEventListener("click", function (event) {
        if (event.target.classList.contains("close")) {
            resumeModal.style.display = "none";
        }
    });

    // ✅ Project Button Click Alert
    document.querySelectorAll(".view-project").forEach(button => {
        button.addEventListener("click", function () {
            alert("Project details coming soon!");
        });
    });
});
