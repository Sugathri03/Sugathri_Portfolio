document.addEventListener("DOMContentLoaded", function () {
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
  