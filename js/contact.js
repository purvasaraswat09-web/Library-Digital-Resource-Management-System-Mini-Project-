document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");
    const status = document.querySelector("#form-status");

    if (!form) return;

    form.addEventListener("submit", async event => {
        event.preventDefault();
        if (!form.reportValidity()) return;

        const contact = {
            name: form.querySelector("#name").value.trim(),
            email: form.querySelector("#email").value.trim(),
            subject: form.querySelector("#subject").value.trim(),
            message: form.querySelector("#message").value.trim(),
            submittedAt: new Date().toISOString()
        };

        try {
            const response = await fetch("http://localhost:3000/contacts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(contact)
            });

            if (!response.ok) throw new Error("Could not save your message.");

            if (status) status.textContent = "Message saved successfully! You can view it in the JSON Server contacts data.";
            form.reset();
        } catch (error) {
            if (status) status.textContent = "Unable to save. Please start JSON Server (npm run api) and try again.";
            console.error(error);
        }
    });
});
