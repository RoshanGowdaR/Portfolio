/**
 * Main JavaScript File
 * Handles smooth scrolling, animations, theme toggle, and dynamic content
 */

(function() {
    'use strict';
    
    // ===== Theme Management =====
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;
    
    /**
     * Load theme from cookie
     */
    function loadTheme() {
        const savedTheme = getCookie('theme');
        if (savedTheme === 'light') {
            body.classList.add('light-theme');
            updateThemeIcon(true);
        }
    }
    
    /**
     * Toggle theme
     */
    function toggleTheme() {
        body.classList.toggle('light-theme');
        const isLight = body.classList.contains('light-theme');
        
        // Save to cookie (expires in 365 days)
        setCookie('theme', isLight ? 'light' : 'dark', 365);
        updateThemeIcon(isLight);
    }
    
    /**
     * Update theme icon
     * @param {boolean} isLight - Whether light theme is active
     */
    function updateThemeIcon(isLight) {
        if (themeIcon) {
            themeIcon.className = isLight ? 'fas fa-sun' : 'fas fa-moon';
        }
    }
    
    /**
     * Set cookie
     * @param {string} name - Cookie name
     * @param {string} value - Cookie value
     * @param {number} days - Expiration in days
     */
    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }
    
    /**
     * Get cookie
     * @param {string} name - Cookie name
     * @returns {string} - Cookie value
     */
    function getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for(let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    // ===== Simple Session / Visitor Tracking (Client-side only) =====
    /**
     * Generate a simple random session ID
     * This is purely client-side and stored in cookies, suitable for GitHub Pages.
     */
    function generateSessionId() {
        return 'sess-' + Math.random().toString(36).substring(2) + Date.now().toString(36);
    }

    /**
     * Initialize visitor tracking cookies:
     * - session_id: pseudo session identifier
     * - visit_count: number of visits
     * - last_visit: timestamp of last visit
     */
    function initVisitorTracking() {
        // Session ID
        let sessionId = getCookie('session_id');
        if (!sessionId) {
            sessionId = generateSessionId();
            setCookie('session_id', sessionId, 1); // expires in 1 day
        }

        // Visit count
        let visitCount = parseInt(getCookie('visit_count') || '0', 10);
        visitCount += 1;
        setCookie('visit_count', String(visitCount), 365);

        // Last visit time
        const now = new Date().toISOString();
        setCookie('last_visit', now, 365);
    }
    
    // ===== Navigation =====
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.querySelector('.navbar');
    
    /**
     * Toggle mobile menu
     */
    function toggleMobileMenu() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Update aria-expanded
        const isExpanded = navToggle.classList.contains('active');
        navToggle.setAttribute('aria-expanded', isExpanded);
    }
    
    /**
     * Close mobile menu
     */
    function closeMobileMenu() {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
    }
    
    /**
     * Handle navbar scroll effect
     */
    function handleNavbarScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    /**
     * Update active nav link based on scroll position
     */
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('.section');
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    // ===== Smooth Scrolling =====
    function initSmoothScroll() {
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 70;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                    closeMobileMenu();
                }
            });
        });
    }
    
    // ===== Scroll Animations =====
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('aos-animate');
                }
            });
        }, observerOptions);
        
        const elements = document.querySelectorAll('[data-aos]');
        elements.forEach(el => observer.observe(el));
    }
    
    // ===== Skill Progress Bars =====
    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progress = entry.target.getAttribute('data-progress');
                    entry.target.style.width = progress + '%';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        skillBars.forEach(bar => observer.observe(bar));
    }
    
    // ===== Skills Filtering =====
    function initSkillsFilter() {
        const filterBtns = document.querySelectorAll('.skills .filter-btn');
        const skillCards = document.querySelectorAll('.skill-card');
        
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.getAttribute('data-filter');
                
                // Update active button
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Filter skills
                skillCards.forEach(card => {
                    const category = card.getAttribute('data-category');
                    
                    if (filter === 'all' || category === filter) {
                        card.classList.remove('hidden');
                        card.style.display = 'block';
                    } else {
                        card.classList.add('hidden');
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // ===== Projects Data (replaces XML/XSLT) =====
    const PROJECTS = [
        {
            id: 1,
            title: 'Wonderlust Traveling App',
            difficulty: 'advanced',
            description: 'A comprehensive full-stack travel booking application built with MERN stack, featuring user authentication, real-time booking system, interactive maps, and payment integration.',
            technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'EJS', 'Mongoose'],
            image: 'assets/images/project-wonderlust.jpg',
            link: 'https://github.com/RoshanGowdaR',
            status: 'Completed'
        },
        {
            id: 2,
            title: 'AI Assistant Chatbot',
            difficulty: 'advanced',
            description: 'An intelligent conversational AI chatbot powered by natural language processing, featuring context-aware responses, sentiment analysis, and multi-language support with prompt engineering techniques.',
            technologies: ['Python', 'AI/ML', 'NLP', 'Prompt Engineering', 'API Integration'],
            image: 'assets/images/project-ai-chatbot.jpg',
            link: 'https://github.com/RoshanGowdaR',
            status: 'Completed'
        },
        {
            id: 3,
            title: 'Netflix Clone',
            difficulty: 'advanced',
            description: 'A responsive Netflix clone with user authentication, video streaming capabilities, personalized recommendations, watchlist management, and dynamic content loading.',
            technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB'],
            image: 'assets/images/project-netflix.jpg',
            link: 'https://github.com/RoshanGowdaR',
            status: 'Completed'
        },
        {
            id: 4,
            title: 'Spotify Clone',
            difficulty: 'intermediate',
            description: 'A music streaming web application inspired by Spotify, featuring playlist creation, music player controls, search functionality, and responsive design.',
            technologies: ['HTML', 'CSS', 'JavaScript', 'Web Audio API'],
            image: 'assets/images/project-spotify.jpg',
            link: 'https://github.com/RoshanGowdaR',
            status: 'Completed'
        },
        {
            id: 5,
            title: 'Weather Application',
            difficulty: 'intermediate',
            description: 'A real-time weather forecasting application with location-based weather data, 7-day forecast, interactive maps, and weather alerts using external weather APIs.',
            technologies: ['HTML', 'CSS', 'JavaScript', 'REST API', 'Geolocation'],
            image: 'assets/images/project-weather.jpg',
            link: 'https://github.com/RoshanGowdaR',
            status: 'Completed'
        },
        {
            id: 6,
            title: 'Image Compressor',
            difficulty: 'intermediate',
            description: 'A web-based image compression tool that reduces file sizes while maintaining quality, supporting multiple formats (JPEG, PNG, WebP) with adjustable compression levels.',
            technologies: ['JavaScript', 'Canvas API', 'HTML', 'CSS'],
            image: 'assets/images/project-compressor.jpg',
            link: 'https://github.com/RoshanGowdaR',
            status: 'Completed'
        },
        {
            id: 7,
            title: 'PDF Merger',
            difficulty: 'intermediate',
            description: 'A web application for merging multiple PDF files into a single document, featuring drag-and-drop interface, page reordering, and preview functionality.',
            technologies: ['Python', 'PDF Libraries', 'HTML', 'CSS', 'JavaScript'],
            image: 'assets/images/project-pdf-merger.jpg',
            link: 'https://github.com/RoshanGowdaR',
            status: 'Completed'
        },
        {
            id: 8,
            title: 'Tic-Tac-Toe Game',
            difficulty: 'beginner',
            description: 'An interactive tic-tac-toe game with single-player (vs AI) and multiplayer modes, score tracking, and smooth animations built with vanilla JavaScript.',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            image: 'assets/images/project-tictactoe.jpg',
            link: 'https://github.com/RoshanGowdaR',
            status: 'Completed'
        }
    ];

    // ===== Projects Loading (JS only) =====
    function loadProjects() {
        const projectsGrid = document.getElementById('projects-grid');
        if (!projectsGrid) return;

        // Clear existing content
        projectsGrid.innerHTML = '';

        // Sort by id ascending (like XSLT did)
        const sortedProjects = [...PROJECTS].sort((a, b) => a.id - b.id);

        sortedProjects.forEach((project, index) => {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.setAttribute('data-difficulty', project.difficulty);
            card.setAttribute('data-aos', 'fade-up');
            card.setAttribute('data-aos-delay', String(index * 100));

            // Build technologies HTML
            const techHtml = project.technologies
                .map(tech => `<span class="tech-tag">${tech}</span>`)
                .join('');

            // Difficulty label text
            let difficultyLabel = '';
            if (project.difficulty === 'beginner') {
                difficultyLabel = '🟢 Beginner';
            } else if (project.difficulty === 'intermediate') {
                difficultyLabel = '🟡 Intermediate';
            } else if (project.difficulty === 'advanced') {
                difficultyLabel = '🔴 Advanced';
            }

            card.innerHTML = `
                <img class="project-image" src="${project.image}" alt="Screenshot of ${project.title}">
                <div class="project-content">
                    <span class="project-difficulty">${difficultyLabel}</span>
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tech">
                        ${techHtml}
                    </div>
                    <a class="project-link" href="${project.link}" target="_blank" rel="noopener noreferrer" aria-label="View ${project.title} project on GitHub">
                        View Project <i class="fas fa-external-link-alt"></i>
                    </a>
                </div>
            `;

            projectsGrid.appendChild(card);
        });

        // Re-initialize project card tilt effect
        if (window.reinitProjectTilt) {
            window.reinitProjectTilt();
        }

        // Initialize project filtering
        initProjectsFilter();
    }
    
    // ===== Projects Filtering =====
    function initProjectsFilter() {
        const filterBtns = document.querySelectorAll('.projects .filter-btn');
        const projectCards = document.querySelectorAll('.project-card');
        
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.getAttribute('data-filter');
                
                // Update active button
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Filter projects
                projectCards.forEach(card => {
                    const difficulty = card.getAttribute('data-difficulty');
                    
                    if (filter === 'all' || difficulty === filter) {
                        card.classList.remove('hidden');
                        card.style.display = 'block';
                    } else {
                        card.classList.add('hidden');
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // ===== Event Listeners =====
    function initEventListeners() {
        // Theme toggle
        if (themeToggle) {
            themeToggle.addEventListener('click', toggleTheme);
        }
        
        // Mobile menu toggle
        if (navToggle) {
            navToggle.addEventListener('click', toggleMobileMenu);
        }
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (navMenu && navMenu.classList.contains('active')) {
                if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
                    closeMobileMenu();
                }
            }
        });
        
        // Scroll events
        window.addEventListener('scroll', () => {
            handleNavbarScroll();
            updateActiveNavLink();
        });
        
        // Initial navbar state
        handleNavbarScroll();
    }
    
    // ===== Initialize Everything =====
    function init() {
        loadTheme();
        initVisitorTracking();
        initEventListeners();
        initSmoothScroll();
        initScrollAnimations();
        animateSkillBars();
        initSkillsFilter();
        loadProjects();
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
})();
