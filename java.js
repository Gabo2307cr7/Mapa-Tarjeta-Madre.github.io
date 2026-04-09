document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById('info-box');
    const todasLasAreas = document.querySelectorAll('area');

    todasLasAreas.forEach(zona => {
        // Al entrar el mouse en un área
        zona.addEventListener('mouseenter', function() {
            const texto = this.getAttribute('data-info');
            display.innerText = texto;
            display.style.color = "#00ffcc";
        });

        // Al salir el mouse del área
        zona.addEventListener('mouseleave', () => {
            display.innerText = "Pasa el ratón sobre un componente para conocer su función";
            display.style.color = "#fff";
        });
    });
});
