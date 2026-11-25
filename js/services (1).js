document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(
        '.category-card .card-btn[href="#"]'
    ).forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            alert("This service information will be available soon.");
        });
    });
});