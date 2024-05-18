function attachGradientEvents() {

    const gradient = document.getElementById(`gradient`);
    gradient.addEventListener('mousemove', gradientMove);
    gradient.addEventListener('mouseout', gradientOut);

    function gradientMove(event) {
        const gradientWidth = event.target.clientWidth;
        const positionOnTheMouse = event.offsetX / (gradientWidth - 1);
        const percent = Math.trunc(positionOnTheMouse * 100);
        document.getElementById(`result`).textContent = percent + `%`;
    }

    function gradientOut() {
        document.getElementById(`result`).textContent = ``;
    }
}