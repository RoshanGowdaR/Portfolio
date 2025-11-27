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
            id: 0,
            title: 'Plant Doctor',
            difficulty: 'advanced',
            description: 'An AI-powered web application that helps diagnose plant diseases and provides treatment recommendations. Built with modern web technologies and AI integration for accurate plant health analysis.',
            technologies: ['React', 'TypeScript', 'Vite', 'Gemini AI', 'Tailwind CSS'],
            image: 'assets/images/project-ai-chatbot.jpg',
            status: 'Completed',
            links: {
                live: 'https://plant-doctor-mauve.vercel.app',
                repo: 'https://github.com/animelover636294-cyber/Plant_Doctor'
            }
        },
        {
            id: 1,
            title: 'Ophelia AI Marketplace',
            difficulty: 'advanced',
            description: 'An AI-powered marketplace platform for local artisans. Features AI copilots for product storytelling, marketing content generation, inventory management, and customer support chatbot. Built with React, Supabase, and Google Gemini AI integration.',
            technologies: ['React', 'TypeScript', 'Vite', 'Supabase', 'Tailwind CSS', 'Gemini AI', 'Edge Functions'],
            image: 'assets/images/project-ai-chatbot.jpg',
            status: 'In Production',
            links: {
                live: 'https://ophelia-unbound-ai.vercel.app',
                repo: 'https://github.com/RoshanGowdaR/ophelia-unbound-ai'
            }
        },
        {
            id: 2,
            title: 'Wanderlust Explorer',
            difficulty: 'advanced',
            description: 'A premium expedition travel platform showcasing exotic destinations and adventure expeditions. Features destination discovery, expedition booking, ship showcase, and user authentication with Google OAuth.',
            technologies: ['React', 'TypeScript', 'Vite', 'Supabase', 'Tailwind CSS', 'React Router'],
            image: 'assets/images/project-wonderlust.jpg',
            status: 'Completed',
            links: {
                live: 'https://wanderlust-explorer-voyages.vercel.app',
                repo: 'https://github.com/RoshanGowdaR/wanderlust-explorer-voyages'
            }
        },
        {
            id: 3,
            title: 'AI Assistant Chatbot',
            difficulty: 'advanced',
            description: 'A conversational AI chatbot built with modern web technologies. Features intelligent responses, context awareness, and seamless user experience with real-time messaging capabilities.',
            technologies: ['React', 'TypeScript', 'Vite', 'Supabase', 'Gemini AI', 'Tailwind CSS'],
            image: 'assets/images/project-ai-chatbot.jpg',
            status: 'Completed',
            links: {
                live: 'https://ai-assistant-chat-bot-jdbt.vercel.app',
                repo: 'https://github.com/RoshanGowdaR/Ai-Assistant-Chat-Bot'
            }
        },
        {
            id: 4,
            title: 'Spotify Clone',
            difficulty: 'intermediate',
            description: 'A music streaming web application inspired by Spotify, featuring playlist creation, music player controls, search functionality, and responsive design.',
            technologies: ['HTML', 'CSS', 'JavaScript', 'Web Audio API'],
            image: 'assets/images/project-spotify.jpg',
            status: 'Completed',
            links: {
                live: '',
                repo: 'https://github.com/RoshanGowdaR/Spotify'
            }
        },
        {
            id: 5,
            title: 'Weather Application',
            difficulty: 'intermediate',
            description: 'A real-time weather forecasting application with location-based weather data, 7-day forecast, interactive maps, and weather alerts using external weather APIs.',
            technologies: ['HTML', 'CSS', 'JavaScript', 'REST API', 'Geolocation'],
            image: 'assets/images/project-weather.jpg',
            status: 'Completed',
            links: {
                live: '',
                repo: 'https://github.com/RoshanGowdaR'
            }
        },
        {
            id: 6,
            title: 'Image Compressor',
            difficulty: 'intermediate',
            description: 'React + Vite powered compression studio with dark/light modes, multi-file support (JPG/PNG/PDF/DOCX), granular sliders for quality/size, and instant before-after previews.',
            technologies: ['React', 'Vite', 'Tailwind CSS', 'Bootstrap', 'browser-image-compression'],
            image: 'assets/images/project-compressor.jpg',
            status: 'Completed',
            links: {
                live: '',
                repo: 'https://github.com/RoshanGowdaR/Image-Compressor'
            }
        }
    ];

    // ===== Projects Loading (JS only) =====
    function loadProjects() {
        const projectsGrid = document.getElementById('projects-grid');
        if (!projectsGrid) {
            console.error('Projects grid element not found!');
            return;
        }

        // Clear existing content
        projectsGrid.innerHTML = '';

        // Sort by id ascending
        const sortedProjects = [...PROJECTS].sort((a, b) => a.id - b.id);

        sortedProjects.forEach((project, index) => {
            // Get repo link (prefer repo, fallback to live)
            const repoLink = project.links?.repo || project.links?.live || '#';
            
            // Create card as a link
            const card = document.createElement('a');
            card.href = repoLink;
            card.target = '_blank';
            card.rel = 'noopener noreferrer';
            card.className = 'project-card';
            card.setAttribute('data-difficulty', project.difficulty);
            card.setAttribute('data-aos', 'fade-up');
            card.setAttribute('data-aos-delay', String(index * 100));
            
            // Ensure visibility
            card.style.textDecoration = 'none';
            card.style.color = 'inherit';
            card.style.display = 'block';
            card.style.opacity = '1';
            card.style.visibility = 'visible';
            card.style.background = 'var(--glass-bg)';

            // Get first 2 lines of description (limit to ~150 chars)
            const shortDescription = project.description.length > 150 
                ? project.description.substring(0, 150) + '...'
                : project.description;

            card.innerHTML = `
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${shortDescription}</p>
                </div>
            `;

            projectsGrid.appendChild(card);
            console.log('Added project card:', project.title);
        });
        
        console.log('Total projects loaded:', projectsGrid.children.length);
        
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
    
    // Also try loading projects after a short delay as a fallback
    setTimeout(() => {
        const projectsGrid = document.getElementById('projects-grid');
        if (projectsGrid && projectsGrid.children.length === 0) {
            console.log('Projects grid is empty, reloading...');
            loadProjects();
        }
    }, 1000);
    
})();
