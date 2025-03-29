function loadSection(id, file, callback) {
    fetch(file)
      .then(res => res.text())
      .then(html => {
        document.getElementById(id).innerHTML = html;
        if (callback) callback(); // Call setup after loading
      })
      .catch(err => {
        console.error(`Failed to load ${file}:`, err);
        document.getElementById(id).innerHTML = `<p style="color:red;">Failed to load ${file}</p>`;
      });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    loadSection("hero-section", "html/hero.html", setupHeroModal);         // ⬅️ Trigger modal setup after hero loads
    loadSection("about-section", "html/about.html");
    loadSection("projects-section", "html/projects.html");
    loadSection("resume-section", "html/resume.html", setupResumeButton); // ⬅️ Resume logic after section loads
    loadSection("contact-section", "html/contact.html");
  });