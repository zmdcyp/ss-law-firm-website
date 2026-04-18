/**
 * Junaid Law Associates - Website interaction script
 */

document.addEventListener('DOMContentLoaded', () => {
    initCookieBanner();
    initHeroSlider();
    initTestimonials();
    initMobileMenu();
    initDropdowns();
});

// Cookie 横幅
function initCookieBanner() {
    const banner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');
    
    if (!banner || !acceptBtn) return;
    
    // 检查是否已接受
    if (localStorage.getItem('cookiesAccepted')) {
        banner.classList.add('hidden');
        return;
    }
    
    // 延迟显示
    setTimeout(() => {
        banner.classList.add('visible');
    }, 1000);
    
    acceptBtn.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        banner.classList.remove('visible');
        setTimeout(() => banner.classList.add('hidden'), 300);
    });
}

// Hero 轮播
function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const indicators = document.querySelectorAll('.hero-indicators .indicator');
    
    if (!slides.length || !indicators.length) return;
    
    let currentIndex = 0;
    const totalSlides = slides.length;
    
    function showSlide(index) {
        currentIndex = (index + totalSlides) % totalSlides;
        
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === currentIndex);
        });
        
        indicators.forEach((ind, i) => {
            ind.classList.toggle('active', i === currentIndex);
        });
    }
    
    // 点击指示器
    indicators.forEach((ind, i) => {
        ind.addEventListener('click', () => showSlide(i));
    });
    
    // 自动轮播
    setInterval(() => {
        showSlide(currentIndex + 1);
    }, 5000);
}

// 客户评价轮播
function initTestimonials() {
    const testimonials = document.querySelectorAll('.testimonial');
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');
    const counter = document.querySelector('.testimonial-counter');
    
    if (!testimonials.length) return;
    
    let currentIndex = 0;
    const total = testimonials.length;
    
    function updateTestimonial() {
        testimonials.forEach((t, i) => {
            t.classList.toggle('active', i === currentIndex);
        });
        if (counter) {
            counter.textContent = `${currentIndex + 1} / ${total}`;
        }
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + total) % total;
            updateTestimonial();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % total;
            updateTestimonial();
        });
    }
}

// 移动端菜单
function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (!menuBtn || !navLinks) return;
    
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        menuBtn.classList.toggle('active');
    });
    
    // 点击链接后关闭
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            menuBtn.classList.remove('active');
        });
    });
}

// 移动端下拉菜单
function initDropdowns() {
    const hasDropdowns = document.querySelectorAll('.has-dropdown');
    
    if (window.innerWidth <= 768) {
        hasDropdowns.forEach(item => {
            const link = item.querySelector('a');
            if (link) {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    item.classList.toggle('open');
                });
            }
        });
    }
}
