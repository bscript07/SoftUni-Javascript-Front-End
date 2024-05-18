function lockedProfile() {

    const toggle = (btn, content) => {
        if (btn.innerHTML === "Show more") {
            btn.innerHTML = "Hide it";
            content.style.display = "block";
        } else {
            btn.innerHTML = "Show more";
            content.style.display = "none";
        }
    }

    document.getElementById(`main`).addEventListener('click', event => {
        if (event.target.tagName === "BUTTON") {
            const profile = event.target.parentNode;
            const isUnlocked = profile.querySelector(`input[type="radio"]:checked`).value === "unlock";

            if (isUnlocked) {
                const div = profile.querySelector(`div`);
                toggle(event.target, div);
            }
        }
    });
}