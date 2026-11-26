document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".category-card .card-btn").forEach(link => {
        if (link.getAttribute("href") === "#") {
            link.addEventListener("click", event => {
                event.preventDefault();
                window.location.href = "books.html";
            });
        }
    });
});