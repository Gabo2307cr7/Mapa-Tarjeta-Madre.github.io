// Asegúrate de que tu java.js tenga esta lógica
document.querySelectorAll('area').forEach(zona => {
    zona.addEventListener('mouseenter', function() {
        const info = this.getAttribute('data-info');
        document.getElementById('info-box').textContent = info;
    });
});
