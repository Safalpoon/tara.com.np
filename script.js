document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".menu-icon").addEventListener("click", function () {
        document.getElementById("nav-list").classList.nav-list("show");
    });
});
function toggleMenu() {
    const nav = document.getElementById("nav-list");
    nav.classList.toggle("show");
}

document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Check for saved theme preference or use the system preference
    const currentTheme = localStorage.getItem('theme') || 
                         (prefersDarkScheme.matches ? 'dark' : 'light');
    
    // Apply the saved theme or system preference
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
    
    // Toggle theme when button is clicked
    themeToggle.addEventListener('click', () => {
        let theme = 'light';
        
        if (document.documentElement.getAttribute('data-theme') === 'light') {
            document.documentElement.setAttribute('data-theme', 'dark');
            theme = 'dark';
            console.log('dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            console.log('light');
        }
        
        // Save the preference
        localStorage.setItem('theme', theme);
    });
    
    // Smooth scrolling for navigation links
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
                
                // Update active link
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });
    
    // Intersection Observer for scroll animations
    const observeElements = () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        document.querySelectorAll('#').forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(element);
        });
    };
    
    // Add visible class to trigger animation
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.visible').forEach(element => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        });
    });
    
    // Call the function if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
        observeElements();
    }
    
    // Mobile navigation toggle
    const createMobileNav = () => {
        const header = document.querySelector('header');
        const nav = document.querySelector('nav');
        
        // Create mobile menu button
        const mobileMenuBtn = document.createElement('button');
        mobileMenuBtn.classList.add('mobile-menu-btn');
        mobileMenuBtn.setAttribute('aria-label', 'Toggle navigation menu');
        mobileMenuBtn.innerHTML = '<span></span><span></span><span></span>';
        
        // Add mobile menu button to nav
        nav.insertBefore(mobileMenuBtn, document.querySelector('.nav-links'));
        
        // Toggle mobile menu
        mobileMenuBtn.addEventListener('click', () => {
            document.querySelector('.nav-links').classList.toggle('show');
            mobileMenuBtn.classList.toggle('active');
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target) && document.querySelector('.nav-links').classList.contains('show')) {
                document.querySelector('.nav-links').classList.remove('show');
                mobileMenuBtn.classList.remove('active');
            }
        });
    
        
        // Add mobile styles
       ` const style = document.createElement('style');
        style.textContent =  
            @media (max-width: 768px) {
                .nav-links {
                    position: absolute;
                    top: var(--header-height);
                    left: 0;
                    width: 100%;
                    background-color: var(--bg-color);
                    flex-direction: column;
                    padding: 20px;
                    box-shadow: var(--shadow);
                    transform: translateY(-100%);
                    opacity: 0;
                    visibility: hidden;
                    transition: transform 0.3s ease, opacity 0.3s ease, visibility 0.3s ease;
                    z-index: 99;
                }
                
                .nav-links.show {
                    transform: translateY(0);
                    opacity: 1;
                    visibility: visible;
                }
                
                .nav-links li {
                    margin: 15px 0;
                }
                
                .mobile-menu-btn {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    width: 30px;
                    height: 20px;
                    background: transparent;
                    border: none;
                    cursor: pointer;
                    padding: 0;
                }
                
                .mobile-menu-btn span {
                    display: block;
                    width: 100%;
                    height: 2px;
                    background-color: var(--text-color);
                    transition: var(--transition);
                }
                
                .mobile-menu-btn.active span:nth-child(1) {
                    transform: translateY(9px) rotate(45deg);
                }
                
                .mobile-menu-btn.active span:nth-child(2) {
                    opacity: 0;
                }
                
                .mobile-menu-btn.active span:nth-child(3) {
                    transform: translateY(-9px) rotate(-45deg);
                }
            }
            
            @media (min-width: 769px) {
                .mobile-menu-btn {
                    display: none;
                }
            }
        ;
        
        document.head.appendChild(style);
    };`
    
    // Initialize mobile navigation
    if (window.innerWidth <= 768) {
        createMobileNav();
    }
    
    // Handle resize events
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 768 && !document.querySelector('.mobile-menu-btn')) {
            createMobileNav();
        }
    });
}});






