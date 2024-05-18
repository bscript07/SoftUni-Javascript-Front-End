function attachEventsListeners() {

    const buttons = Array.from(document.querySelectorAll("input[type=button]"));
    const text = Array.from(document.querySelectorAll("input[type=text]"));

    for (const btn of buttons) {
        btn.addEventListener('click', onClick);
    }

    function onClick(event) {
        const value = event.target.parentElement.children[1].value;
        const id = event.target.parentElement.children[1].id;

        switch (id) {
            case "days": propagation(value); break;
            case "hours": propagation(value / 24); break;
            case "minutes": propagation(value / 24 / 60); break;
            case "seconds": propagation(value / 24 / 60 / 60); break;
        }
    }

    function propagation(value) {
        text[0].value = value;
        let currentValue = value * 24;

        for (let i = 1; i < text.length; i++) {
            const currentInput = text[i];
            currentInput.value = currentValue;
            currentValue *= 60;
        }
    }
}