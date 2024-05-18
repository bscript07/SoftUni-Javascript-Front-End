function focused() {

    const inputFields = document.getElementsByTagName(`input`);
    Array.from(inputFields).forEach(input => {
        input.addEventListener(`focus`, inputFocus);
        input.addEventListener(`blur`, inputBlur);
    });

    function inputFocus(event) {
        const sectionElement = event.target.parentNode;
        sectionElement.classList.add(`focused`);
    }

    function inputBlur(event) {
        const sectionElement = event.target.parentNode;
        sectionElement.classList.remove(`focused`);
    }

}