document.addEventListener("DOMContentLoaded", () => {
    const heading = document.querySelector(".dashboard-hero h1");

    if (!heading) return;

    const hour = new Date().getHours();

    let greeting;

    if (hour < 12) {
        greeting = "Good morning";
    } else if (hour < 17) {
        greeting = "Good afternoon";
    } else {
        greeting = "Good evening";
    }

    heading.textContent = `${greeting}! Your Library Dashboard`;
});