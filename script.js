const modal = document.getElementById("projectModal");
const modalText = document.getElementById("projectText");
const closeButton = document.querySelector(".close-button");


document.addEventListener("DOMContentLoaded", function () {
    // ✅ Open Resume in a New Tab
    document.getElementById("showResume").addEventListener("click", function () {
        window.open("assets/Sugathri_Gotu_Resume_Work.pdf", "_blank");
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
    const projectDetails = [
        `Collaborated with the Payment Authorization team at Virtusa on a client project for PMI (Project Management Institute), supporting their certification platform. Focused on developing and maintaining secure .NET-based services for transaction processing and authorization. Contributed to Agile sprint cycles, ensuring alignment with PMI standards for quality, reliability, and timely delivery.
        Want to know more about this? <a href="https://www.pmi.org/certifications" target="_blank" style="color:#0077cc;text-decoration:underline;">https://www.pmi.org/certifications</a>`,
      
        `Built and managed CI/CD pipelines using Jenkins to automate the build, test, and deployment processes. Integrated tools like Git, SonarQube, and Docker to ensure secure, scalable, and high-availability software releases with minimal manual intervention.
  <br><img src="images/ci-cd-pipeline.png" alt="CI/CD Pipeline" style="margin-top:10px; max-width:100%; border-radius:8px;">`,
      
        `Designed and developed a secure payment gateway system with end-to-end encryption, multi-factor authentication, and PCI-DSS compliance. Ensured robust transaction integrity and user data protection while optimizing performance for high-traffic environments.
  <br><img src="images/payment-gateway.png" alt="Secure Payment Gateway" style="margin-top:10px; max-width:100%; border-radius:8px;">`
      ];
      
    
    document.querySelectorAll(".view-project").forEach((button, index) => {
        button.addEventListener("click", () => {
            modalText.innerHTML = projectDetails[index];
            modal.style.display = "block";
        });
    });
    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
    });
    
    window.addEventListener("click", event => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
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
