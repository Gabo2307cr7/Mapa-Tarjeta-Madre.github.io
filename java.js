document.addEventListener("DOMContentLoaded", () => {
    const infoBox = document.getElementById('info-box');
    const todasLasAreas = document.querySelectorAll('area');

    todasLasAreas.forEach(area => {
        area.addEventListener('mouseenter', function() {
            const texto = this.getAttribute('data-info');
            if (infoBox) {
                infoBox.innerText = texto;
                infoBox.style.display = "block"; // Asegura que se vea
            }
        });

        area.addEventListener('mouseleave', function() {
            if (infoBox) {
                infoBox.innerText = "Pasa el mouse sobre un componente para conocer su función";
            }
        });
    });
});
