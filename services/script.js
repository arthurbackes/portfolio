document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Fermer le menu quand on clique sur un lien
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Animation au scroll
    const animateOnScroll = function() {
        const packCard = document.querySelector('.pack-card');
        if (packCard) {
            const elementPosition = packCard.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                packCard.style.opacity = '1';
                packCard.style.transform = 'translateY(0)';
            }
        }
    };
    
    // Initialiser les animations
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
});