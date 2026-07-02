document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       Mobile Navigation Menu
       ========================================================================== */
    const menuToggle = document.getElementById('menu-toggle-btn');
    const navMenu = document.getElementById('nav-menu-bar');
    const navLinks = document.querySelectorAll('.nav-link');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu on link click
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Scroll Spy: Highlight nav menu links based on section visibility
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        let scrollY = window.pageYOffset;
        
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector(`.nav-list a[href*=${sectionId}]`)?.classList.add('active');
            } else {
                document.querySelector(`.nav-list a[href*=${sectionId}]`)?.classList.remove('active');
            }
        });
    });




    /* ==========================================================================
       Statistics Counter Animation
       ========================================================================== */
    const stats = document.querySelectorAll('.stat-num');
    
    const animateStats = () => {
        stats.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'), 10);
            const duration = 1600; // 1.6 seconds
            const startTime = performance.now();
            
            const updateCount = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                // Ease out cubic
                const easeProgress = 1 - Math.pow(1 - progress, 3);
                const currentValue = Math.floor(easeProgress * target);
                
                stat.textContent = currentValue.toLocaleString();
                
                if (progress < 1) {
                    requestAnimationFrame(updateCount);
                } else {
                    stat.textContent = target.toLocaleString();
                }
            };
            
            requestAnimationFrame(updateCount);
        });
    };

    // Intersection Observer to trigger animation when scrolled into view
    if ('IntersectionObserver' in window && stats.length > 0) {
        const statsSection = document.getElementById('stats');
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStats();
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.25 });
        
        if (statsSection) {
            observer.observe(statsSection);
        }
    } else {
        // Fallback: immediately run if observer is not supported
        stats.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'), 10);
            stat.textContent = target.toLocaleString();
        });
    }

    /* ==========================================================================
       Contact Form Submission & Validation
       ========================================================================== */
    const contactForm = document.getElementById('portfolio-contact-form');
    const formFeedback = document.getElementById('form-message-feedback');

    if (contactForm && formFeedback) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Collect fields for submission simulation
            const name = document.getElementById('form-name').value;
            const email = document.getElementById('form-email').value;
            const industry = document.getElementById('form-industry').value;
            const message = document.getElementById('form-message').value;

            // Submit Button loading animation
            const submitBtn = document.getElementById('form-submit-btn');
            const originalText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = 'Encrypting & Transmitting...';
            
            formFeedback.textContent = '';
            formFeedback.className = 'form-feedback';

            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
                
                // Show success feedback
                formFeedback.className = 'form-feedback success';
                formFeedback.innerHTML = `
                    <strong>Strategy Brief Transmitted!</strong><br>
                    Thank you, ${name}. Priya will contact you at ${email} within 12 hours.
                `;
                
                // Clear form
                contactForm.reset();
            }, 1800);
        });
    }

});
