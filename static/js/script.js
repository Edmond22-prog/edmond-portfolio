// Loader
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden');
    }, 1000);
});

// Navigation
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetPage = link.getAttribute('data-page');

        // Update active nav
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        // Show target section
        sections.forEach(section => {
            section.classList.remove('active');
            if (section.id === targetPage) {
                section.classList.add('active');
                window.scrollTo(0, 0);
            }
        });
    });
});

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

// Check for saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');

    if (isDark) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
});

// Color Picker
const colorOptions = document.querySelectorAll('.color-option');
const root = document.documentElement;

colorOptions.forEach(option => {
    option.addEventListener('click', () => {
        const color = option.getAttribute('data-color');
        root.style.setProperty('--primary-color', color);

        // Update active state
        colorOptions.forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');

        // Save preference
        localStorage.setItem('primaryColor', color);
    });
});

// Load saved color
const savedColor = localStorage.getItem('primaryColor');
if (savedColor) {
    root.style.setProperty('--primary-color', savedColor);
    colorOptions.forEach(opt => {
        opt.classList.remove('active');
        if (opt.getAttribute('data-color') === savedColor) {
            opt.classList.add('active');
        }
    });
}

// Contact Form
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    // Here you would normally send the data to your Django backend
    console.log('Form data:', formData);

    // Show success message
    alert('Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.');

    // Reset form
    contactForm.reset();
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                // Find and activate the corresponding nav link
                const targetId = href.substring(1);
                navLinks.forEach(link => {
                    if (link.getAttribute('data-page') === targetId) {
                        navLinks.forEach(l => l.classList.remove('active'));
                        link.classList.add('active');

                        sections.forEach(section => {
                            section.classList.remove('active');
                            if (section.id === targetId) {
                                section.classList.add('active');
                                window.scrollTo(0, 0);
                            }
                        });
                    }
                });
            }
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards
document.querySelectorAll('.custom-card, .community-card, .project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});
