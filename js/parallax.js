/**
 * Parallax Effects and Cursor Tracking
 * Handles multi-layer parallax background and 3D card tilt effects
 */

(function() {
    'use strict';
    
    // Parallax Background Layers
    const parallaxContainer = document.getElementById('parallax-container');
    const parallaxLayers = document.querySelectorAll('.parallax-layer');
    
    // 3D Card
    const card3D = document.getElementById('card-3d');
    
    // Particles
    const particlesContainer = document.getElementById('particles');
    
    /**
     * Initialize parallax effects on mouse move
     */
    function initParallax() {
        document.addEventListener('mousemove', handleMouseMove);
    }
    
    /**
     * Handle mouse movement for parallax effect
     * @param {MouseEvent} e - Mouse event object
     */
    function handleMouseMove(e) {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        // Update parallax layers
        parallaxLayers.forEach(layer => {
            const speed = layer.getAttribute('data-speed') || 0.5;
            const x = (mouseX - 0.5) * 100 * speed;
            const y = (mouseY - 0.5) * 100 * speed;
            
            layer.style.transform = `translate(${x}px, ${y}px)`;
        });
        
        // Update 3D card tilt if it exists
        if (card3D) {
            update3DCard(mouseX, mouseY);
        }
    }
    
    /**
     * Update 3D card rotation based on mouse position
     * @param {number} mouseX - Normalized mouse X position (0-1)
     * @param {number} mouseY - Normalized mouse Y position (0-1)
     */
    function update3DCard(mouseX, mouseY) {
        const rect = card3D.getBoundingClientRect();
        const cardCenterX = rect.left + rect.width / 2;
        const cardCenterY = rect.top + rect.height / 2;
        
        // Calculate rotation angles
        const angleX = (mouseY * window.innerHeight - cardCenterY) / 20;
        const angleY = -(mouseX * window.innerWidth - cardCenterX) / 20;
        
        // Apply 3D transform
        card3D.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    }
    
    /**
     * Reset 3D card on mouse leave
     */
    function init3DCardReset() {
        if (card3D) {
            card3D.addEventListener('mouseleave', () => {
                card3D.style.transform = 'rotateX(0) rotateY(0)';
            });
        }
    }
    
    /**
     * Create floating particles
     */
    function createParticles() {
        if (!particlesContainer) return;
        
        // Moderate density for starry effect
        const particleCount = window.innerWidth < 768 ? 80 : 150;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Random position
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            
            // Uniform size - tiny dots
            particle.style.width = '2px';
            particle.style.height = '2px';
            
            // Consistent opacity with slight variation for depth
            particle.style.opacity = 0.3 + Math.random() * 0.2;
            
            particlesContainer.appendChild(particle);
        }
    }
    
    /**
     * Add tilt effect to project cards
     */
    function initProjectCardTilt() {
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach(card => {
            card.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = -(x - centerX) / 10;
                
                this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
            });
        });
    }
    
    /**
     * Parallax scroll effect for sections
     */
    function initScrollParallax() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            
            parallaxLayers.forEach(layer => {
                const speed = layer.getAttribute('data-speed') || 0.5;
                const yPos = -(scrolled * speed);
                layer.style.transform = `translateY(${yPos}px)`;
            });
        });
    }
    
    /**
     * Initialize all parallax effects
     */
    function init() {
        // Create particles
        createParticles();
        
        // Initialize parallax
        initParallax();
        initScrollParallax();
        
        // Initialize 3D card
        init3DCardReset();
        
        // Add slight delay for project cards (wait for them to load)
        setTimeout(() => {
            initProjectCardTilt();
        }, 500);
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    // Re-initialize project card tilt after projects are loaded
    window.reinitProjectTilt = initProjectCardTilt;
    
})();
