document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(
        '.category-card .card-btn[href="#"], .digital-content .card-btn[href="#"]'
    ).forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();

            const card = link.closest(".category-card, .digital-content");
            const title = card?.querySelector("h2, h3")?.textContent
                || "Digital resources";

            alert(
                `${title}: resource links will be added when the digital library is connected.`
            );
        });
    });
});