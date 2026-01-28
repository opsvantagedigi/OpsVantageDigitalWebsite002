/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId) || document.querySelector('.nav__toggle') || document.querySelector('.nav-toggle'),
          nav = document.getElementById(navId) || document.querySelector('.nav')

    if(toggle && nav){
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link, .nav a')

function linkAction(){
    const navMenu = document.getElementById('nav-menu') || document.querySelector('.nav')
    if(navMenu) navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        const sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            const link = document.querySelector('.nav__menu a[href*=' + sectionId + ']') || document.querySelector('.nav a[href*=' + sectionId + ']')
            if(link) link.classList.add('active-link')
        }else{
            const link = document.querySelector('.nav__menu a[href*=' + sectionId + ']') || document.querySelector('.nav a[href*=' + sectionId + ']')
            if(link) link.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})

// Check if ScrollReveal is available
if (typeof ScrollReveal !== 'undefined') {
    sr.reveal(`.hero__data, .hero__image`, {delay: 600, origin: 'top'})
    sr.reveal(`.features__card`, {delay: 600, origin: 'top', interval: 100})
    sr.reveal(`.service-preview__card`, {delay: 600, origin: 'bottom', interval: 100})
    sr.reveal(`.cta__container`, {delay: 600, origin: 'top'})
    sr.reveal(`.footer__content`, {delay: 600, origin: 'top', interval: 100})
}

/*==================== SMOOTH SCROLLING ====================*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/*==================== FORM HANDLING ====================*/
function handleContactForm(event) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    // Simple validation
    if (!data.name || !data.email || !data.message) {
        showNotification('Please fill in all required fields.', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showNotification('Please enter a valid email address.', 'error');
        return;
    }
    
    // Simulate form submission
    showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
    event.target.reset();
}

/*==================== NOTIFICATION SYSTEM ====================*/
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.innerHTML = `
        <div class="notification__content">
            <span class="notification__message">${message}</span>
            <button class="notification__close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 1000;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
        max-width: 400px;
        animation: slideInRight 0.3s ease;
    `;
    
    // Set colors based on type
    const colors = {
        success: { bg: '#10b981', color: '#ffffff' },
        error: { bg: '#ef4444', color: '#ffffff' },
        info: { bg: '#3b82f6', color: '#ffffff' }
    };
    
    notification.style.backgroundColor = colors[type].bg;
    notification.style.color = colors[type].color;
    
    // Append to body
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

/*==================== LOADING ANIMATION ====================*/
window.addEventListener('load', () => {
    // Add loaded class to body for animations
    document.body.classList.add('loaded');
    
    // Initialize any additional animations or functionality here
    console.log('OpsVantage Digital Website loaded successfully!');
});

/*==================== SCROLL TO TOP ====================*/
function createScrollToTopButton() {
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #2563eb, #f59e0b);
        color: white;
        border: none;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 16px rgba(37, 99, 235, 0.3);
        transition: all 0.3s ease;
        z-index: 999;
    `;
    
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.display = 'flex';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });
    
    document.body.appendChild(scrollToTopBtn);
}

// Initialize scroll to top button
createScrollToTopButton();

/*==================== INTERSECTION OBSERVER FOR ANIMATIONS ====================*/
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.features__card, .service-preview__card, .hero__data, .hero__image');
    animateElements.forEach(el => observer.observe(el));
});