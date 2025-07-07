document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Scroll animations
    function checkScroll() {
        // Concept cards
        const conceptCards = document.querySelectorAll('.concept-card');
        conceptCards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (cardTop < windowHeight - 100) {
                card.classList.add('active');
            }
        });
        
        // Menu categories
        const menuCategories = document.querySelectorAll('.menu-category');
        menuCategories.forEach((category, index) => {
            const categoryTop = category.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (categoryTop < windowHeight - 100) {
                setTimeout(() => {
                    category.classList.add('active');
                }, index * 200);
            }
        });
        
        // Team cards
        const teamCards = document.querySelectorAll('.team-card');
        teamCards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (cardTop < windowHeight - 100) {
                card.classList.add('active');
            }
        });
        
        // Contact sections
        const contactInfo = document.querySelector('.contact-info');
        const contactForm = document.querySelector('.contact-form');
        
        if (contactInfo && contactForm) {
            const contactTop = document.querySelector('#contact').getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (contactTop < windowHeight - 100) {
                contactInfo.classList.add('active');
                contactForm.classList.add('active');
            }
        }
    }
    
    // Initial check
    checkScroll();
    
    // Check on scroll
    window.addEventListener('scroll', checkScroll);
    
    // Contact form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Merci pour votre réservation! Nous vous contacterons bientôt pour confirmation.');
            this.reset();
        });
    }
});