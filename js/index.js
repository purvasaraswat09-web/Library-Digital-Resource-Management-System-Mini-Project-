document.addEventListener("DOMContentLoaded", () => {
    const hero = document.querySelector(".hero h1");

    if (hero) {
        hero.setAttribute("tabindex", "-1");
    }

    document.querySelectorAll('a[href="#"]').forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
        });
    });
});