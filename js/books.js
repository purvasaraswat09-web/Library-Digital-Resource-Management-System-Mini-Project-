document.addEventListener("DOMContentLoaded", () => {
    const search = document.querySelector(".search-box input");
    const searchButton = document.querySelector(".search-box button");
    const container = document.querySelector(".books-section .cards-container");
    const status = document.createElement("p");
    status.id = "book-api-status";
    status.setAttribute("role", "status");
    container.before(status);

    let books = [];

    function renderBooks(query = "") {
        const filtered = books.filter(book =>
            `${book.title} ${book.description} ${book.category}`.toLowerCase().includes(query.toLowerCase())
        );

        container.innerHTML = "";

        if (!filtered.length) {
            status.textContent = "No matching books found.";
            return;
        }

        status.textContent = `${filtered.length} book(s) loaded from JSON Server.`;

        filtered.forEach(book => {
            const card = document.createElement("article");
            card.className = "book-card";

            const image = document.createElement("img");
            image.src = book.image || "../images/books/book1.jpg";
            image.alt = book.title;
            image.loading = "lazy";

            const title = document.createElement("h3");
            title.textContent = book.title;

            const description = document.createElement("p");
            description.textContent = book.description || book.category || "";

            const detail = document.createElement("a");
            detail.className = "card-btn";
            detail.href = `#book-${book.id}`;
            detail.textContent = book.available === false ? "Unavailable" : "View Details";
            detail.addEventListener("click", event => {
                event.preventDefault();
                status.textContent = `${book.title} — ${book.description || "Library book"}`;
            });

            card.append(image, title, description, detail);
            container.append(card);
        });
    }

    async function loadBooks() {
        try {
            const response = await fetch("http://localhost:3000/books");
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            books = await response.json();
            renderBooks(search ? search.value : "");
        } catch (error) {
            status.textContent = "Could not connect to JSON Server. Start it with: npm run api";
            console.error("JSON Server request failed:", error);
        }
    }

    if (search) {
        search.addEventListener("input", () => renderBooks(search.value));
    }
    if (searchButton) {
        searchButton.addEventListener("click", event => {
            event.preventDefault();
            renderBooks(search ? search.value : "");
        });
    }

    loadBooks();
});
