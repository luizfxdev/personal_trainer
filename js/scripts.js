document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    function updateNavbarStyle() {
        const scrollPosition = window.scrollY;

        if (scrollPosition > 50) {
            navbar.classList.add('scrolled');
            
            // Altera cor dos links quando scrolled
            navLinks.forEach(link => {
                link.style.color = '#333';
                
                // Adiciona efeito de hover
                link.addEventListener('mouseenter', function() {
                    this.style.color = '#007bff';
                });
                
                link.addEventListener('mouseleave', function() {
                    this.style.color = '#333';
                });
            });
        } else {
            navbar.classList.remove('scrolled');
            
            // Restaura cor original dos links
            navLinks.forEach(link => {
                link.style.color = 'white';
                
                // Adiciona efeito de hover
                link.addEventListener('mouseenter', function() {
                    this.style.color = '#007bff';
                });
                
                link.addEventListener('mouseleave', function() {
                    this.style.color = 'white';
                });
            });
        }
    }

    // Adiciona evento de rolagem
    window.addEventListener('scroll', updateNavbarStyle);

    // Chama a função inicial para definir o estado correto
    updateNavbarStyle();
});
