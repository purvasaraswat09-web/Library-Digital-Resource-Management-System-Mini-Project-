document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".content-section").forEach(section => {
        section.addEventListener("click", () => {
            section.classList.toggle("section-highlighted");
        });
    });
});