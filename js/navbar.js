/* Shared navigation behavior: mark the current page and give click feedback. */
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".navbar nav a[href]");

    const normalize = (path) => {
        path = decodeURIComponent(path).replace(/\\/g, "/");
        return path.endsWith("/") ? path + "index.html" : path;
    };

    const currentPath = normalize(window.location.pathname);

    links.forEach((link) => {
        const linkUrl = new URL(link.getAttribute("href"), window.location.href);
        const linkPath = normalize(linkUrl.pathname);

        if (linkPath === currentPath ||
            (currentPath.endsWith("/index.html") && linkPath.endsWith("/index.html"))) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        }

        link.addEventListener("click", () => {
            links.forEach((item) => {
                item.classList.remove("active");
                item.removeAttribute("aria-current");
            });
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        });
    });
});
