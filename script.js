document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animation library
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });

    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Theme toggle functionality
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-theme');
        localStorage.setItem('theme', body.classList.contains('light-theme') ? 'light' : 'dark');
    });

    // Check for saved theme preference
    if (localStorage.getItem('theme') === 'light') {
        body.classList.add('light-theme');
    }

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Header scroll effect
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Animate hero title words
    const heroTitle = document.querySelector('.hero-title');

    setTimeout(() => {
        heroTitle.classList.add('animate');
    }, 500);

    // Smooth scrolling for anchor links
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

    // Populate skills section
    const skillsGrid = document.querySelector('.skills-grid');
    
    skillsData.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.className = 'skill-card';
        skillElement.innerHTML = `
            <div class="skill-icon">${skill.icon}</div>
            <h3 class="skill-name">${skill.name}</h3>
            <p class="skill-description">${skill.description}</p>
        `;
        skillElement.setAttribute('data-aos', 'fade-up');
        skillsGrid.appendChild(skillElement);
    });

// Populate projects section with enhanced design
const projectsGrid = document.querySelector('.projects-grid');

projectsData.forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.className = 'project-card';
    projectElement.innerHTML = `
        <div class="project-image">
            <img src="${project.image}" alt="${project.title}">
            <div class="project-overlay">
                <a href="${project.link}" target="_blank" class="project-link">
                    <i class="fas fa-external-link-alt"></i>
                </a>
            </div>
            <div class="project-tags">
                ${project.tags.map(tag => 
                    `<span class="project-tag ${tag === 'Featured' ? 'featured' : ''}">${tag}</span>`
                ).join('')}
            </div>
        </div>
        <div class="project-details">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-technologies">
                ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
            </div>
            <div class="project-stats">
                <div class="project-stat">
                    <i class="fas fa-heart"></i>
                    <span>${project.stats.likes}</span>
                </div>
                <div class="project-stat">
                    <i class="fas fa-eye"></i>
                    <span>${project.stats.views}</span>
                </div>
                <div class="project-stat">
                    <i class="fas fa-download"></i>
                    <span>${project.stats.downloads}</span>
                </div>
            </div>
            <div class="project-buttons">
                <a href="${project.link}" class="btn btn-primary btn-small">View Project</a>
                <a href="${project.details}" class="btn btn-secondary btn-small">Details</a>
            </div>
        </div>
    `;
    projectElement.setAttribute('data-aos', 'fade-up');
    projectsGrid.appendChild(projectElement);
});

    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const subject = this.querySelector('input[type="text"]:nth-child(3)').value;
        const message = this.querySelector('textarea').value;
        
        // Here you would typically send the form data to a server
        console.log('Form submitted:', { name, email, subject, message });
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });

    // Add hover effect to project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.querySelector('.project-overlay').style.opacity = '1';
        });
        
        card.addEventListener('mouseleave', () => {
            card.querySelector('.project-overlay').style.opacity = '0';
        });
    });
});