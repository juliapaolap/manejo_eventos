// Cambio de tema / color 
document.getElementById('toggle-theme').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});

// Manejar los eventos para mostrar/ocultar el contenido de las categorías
document.querySelectorAll('.category-title').forEach(function(title) {
    title.addEventListener('click', function() {
        let contentId = this.getAttribute('data-target');
        let content = document.getElementById(contentId);

        // Usar una función anónima para manejar el cambio de clases
        content.classList.toggle('visible');

        // Mostrar u ocultar el contenido
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});
