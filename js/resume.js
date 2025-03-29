function setupResumeButton() {
    const resumeBtn = document.getElementById("showResume");
    if (resumeBtn) {
      resumeBtn.addEventListener("click", () => {
        window.open("assets/Sugathri_Work_Resume.pdf", "_blank");
      });
    }
  }
  