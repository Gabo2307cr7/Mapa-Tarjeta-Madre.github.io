document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById('info-box');
    const areas = document.querySelectorAll('area');

    areas.forEach(zona => {
        zona.style.cursor = "pointer"; // Indica visualmente que hay información

        zona.addEventListener('mouseenter', function() {
            display.textContent = this.getAttribute('data-info');
            display.style.borderColor = "#00ffcc";
        });

        zona.addEventListener('mouseleave', () => {
            display.textContent = "Pasa el ratón sobre un componente para conocer su función";
            display.style.borderColor = "#444";
        });
    });
});
