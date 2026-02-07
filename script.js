// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Close menu when a link is tapped
  navMenu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      navMenu.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Quote form: opens user's email app with a prefilled message
const quoteForm = document.getElementById("quoteForm");
if (quoteForm) {
  quoteForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(quoteForm);
    const name = (data.get("name") || "").toString().trim();
    const phone = (data.get("phone") || "").toString().trim();
    const location = (data.get("location") || "").toString().trim();
    const service = (data.get("service") || "").toString().trim();
    const details = (data.get("details") || "").toString().trim();

    const subject = encodeURIComponent(`Quote Request - ${service || "Service"}`);
    const bodyLines = [
      `Name: ${name}`,
      `Phone: ${phone || "N/A"}`,
      `Location: ${location || "N/A"}`,
      `Service: ${service}`,
      "",
      "Details:",
      details,
      "",
      "Sent from the Fehr Exterior Services website."
    ];

    const body = encodeURIComponent(bodyLines.join("\n"));
    const mailto = `mailto:fehrexteriorservices@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailto;
  });
}
