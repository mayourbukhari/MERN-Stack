// Add smooth scrolling animation when page loads
        window.addEventListener('load', function() {
            const sections = document.querySelectorAll('.section');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                    }
                });
            });

            sections.forEach(section => {
                observer.observe(section);
            });
        });

        // Add hover effects to skill tags
        document.querySelectorAll('.skill-tag').forEach(tag => {
            tag.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.05) rotate(2deg)';
            });
            
            tag.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1) rotate(0deg)';
            });
        });