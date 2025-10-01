import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function initHeroAnimations() {
  if (prefersReducedMotion) return;
  
  const heroElements = ['.hero-title', '.hero-subtitle', '.hero-buttons'];
  heroElements.forEach(el => {
    const element = document.querySelector(el);
    if (element) gsap.set(element, { willChange: 'transform, opacity' });
  });
  
  const tl = gsap.timeline({ 
    defaults: { ease: 'power3.out' },
    onComplete: () => {
      heroElements.forEach(el => {
        const element = document.querySelector(el);
        if (element) gsap.set(element, { willChange: 'auto' });
      });
    }
  });
  
  tl.from('.hero-title', {
    y: 100,
    opacity: 0,
    duration: 1.2,
  })
  .from('.hero-subtitle', {
    y: 50,
    opacity: 0,
    duration: 1,
  }, '-=0.8')
  .from('.hero-buttons', {
    y: 30,
    opacity: 0,
    duration: 0.8,
  }, '-=0.6');
}

export function initRocketAnimation() {
  const rocket = document.querySelector('.rocket-container');
  if (!rocket || prefersReducedMotion) return;

  gsap.set('.rocket-container', { willChange: 'transform' });
  gsap.set(['.rocket-orbit-1', '.rocket-orbit-2', '.rocket-glow'], { willChange: 'transform' });

  gsap.to('.rocket-container', {
    y: -30,
    duration: 2,
    ease: 'power1.inOut',
    yoyo: true,
    repeat: -1,
  });

  gsap.to('.rocket-orbit-1', {
    rotation: 360,
    duration: 20,
    ease: 'none',
    repeat: -1,
  });

  gsap.to('.rocket-orbit-2', {
    rotation: -360,
    duration: 15,
    ease: 'none',
    repeat: -1,
  });

  gsap.to('.rocket-glow', {
    scale: 1.1,
    opacity: 0.7,
    duration: 1.5,
    ease: 'power1.inOut',
    yoyo: true,
    repeat: -1,
  });

  gsap.to('.rocket-container', {
    y: -60,
    ease: 'none',
    scrollTrigger: {
      trigger: '.rocket-container',
      start: 'top center',
      end: 'bottom top',
      scrub: 1,
    },
  });
}

export function initScrollAnimations() {
  if (prefersReducedMotion) return;
  
  gsap.utils.toArray('.animate-on-scroll').forEach((element: any) => {
    gsap.from(element, {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        end: 'top 60%',
        toggleActions: 'play none none reverse',
      },
    });
  });
}

export function initStatsCounter() {
  if (prefersReducedMotion) {
    document.querySelectorAll('.stat-number').forEach((stat) => {
      const target = parseInt(stat.textContent || '0');
      stat.textContent = target + (stat.dataset.suffix || '');
    });
    return;
  }
  
  const stats = document.querySelectorAll('.stat-number');
  
  stats.forEach((stat) => {
    const target = parseInt(stat.textContent || '0');
    const obj = { value: 0 };
    
    gsap.to(obj, {
      value: target,
      duration: 2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: stat,
        start: 'top 80%',
        once: true,
      },
      onUpdate: () => {
        stat.textContent = Math.round(obj.value) + (stat.dataset.suffix || '');
      },
    });
  });
}

export function initCardHoverEffects() {
  if (prefersReducedMotion) return;
  
  const cards = document.querySelectorAll('.service-card');
  
  cards.forEach((card) => {
    const icon = card.querySelector('.service-icon');
    if (!icon) return;
    
    card.addEventListener('mouseenter', () => {
      gsap.set(icon, { willChange: 'transform' });
      gsap.to(icon, {
        scale: 1.15,
        rotation: 5,
        duration: 0.3,
        ease: 'back.out(1.7)',
      });
    });
    
    card.addEventListener('mouseleave', () => {
      gsap.to(icon, {
        scale: 1,
        rotation: 0,
        duration: 0.3,
        ease: 'power2.out',
        onComplete: () => {
          gsap.set(icon, { willChange: 'auto' });
        }
      });
    });
  });
}

export function initBackgroundAnimation() {
  if (prefersReducedMotion) return;
  
  const bgElements = document.querySelectorAll('.animated-bg');
  
  bgElements.forEach((element, index) => {
    gsap.set(element, { willChange: 'transform' });
    gsap.to(element, {
      x: index % 2 === 0 ? 100 : -100,
      y: index % 2 === 0 ? -50 : 50,
      duration: 20 + index * 5,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
    });
  });
}

export function initButtonMicroInteractions() {
  if (prefersReducedMotion) return;
  
  const buttons = document.querySelectorAll('.interactive-btn');
  
  buttons.forEach((button) => {
    button.addEventListener('mouseenter', () => {
      gsap.set(button, { willChange: 'transform' });
      gsap.to(button, {
        scale: 1.05,
        duration: 0.3,
        ease: 'back.out(1.7)',
      });
    });
    
    button.addEventListener('mouseleave', () => {
      gsap.to(button, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
        onComplete: () => {
          gsap.set(button, { willChange: 'auto' });
        }
      });
    });
    
    button.addEventListener('mousedown', () => {
      gsap.to(button, {
        scale: 0.95,
        duration: 0.1,
      });
    });
    
    button.addEventListener('mouseup', () => {
      gsap.to(button, {
        scale: 1.05,
        duration: 0.1,
      });
    });
  });
}

export function initParallaxEffects() {
  if (prefersReducedMotion) return;
  
  gsap.utils.toArray('.parallax').forEach((element: any) => {
    const speed = element.dataset.speed || 0.5;
    
    gsap.set(element, { willChange: 'transform' });
    gsap.to(element, {
      y: () => window.innerHeight * parseFloat(speed),
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  });
}

export function initNavigationAnimation() {
  const nav = document.querySelector('.main-nav');
  if (!nav) return;

  ScrollTrigger.create({
    start: 'top -80',
    end: 99999,
    toggleClass: { className: 'nav-scrolled', targets: '.main-nav' },
  });

  if (!prefersReducedMotion) {
    gsap.from('.nav-item', {
      y: -20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power3.out',
      delay: 0.3,
    });
  }
}

export function initMobileMenuAnimation() {
  if (prefersReducedMotion) return;
  
  const menuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
      const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', (!isExpanded).toString());
      
      if (isExpanded) {
        gsap.to(mobileMenu, {
          opacity: 0,
          y: -10,
          duration: 0.2,
          onComplete: () => {
            mobileMenu.classList.add('hidden');
          }
        });
      } else {
        mobileMenu.classList.remove('hidden');
        gsap.fromTo(mobileMenu,
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.3 }
        );
      }
    });
  }
}

export function initAllAnimations() {
  initHeroAnimations();
  initRocketAnimation();
  initScrollAnimations();
  initStatsCounter();
  initCardHoverEffects();
  initBackgroundAnimation();
  initButtonMicroInteractions();
  initParallaxEffects();
  initNavigationAnimation();
  initMobileMenuAnimation();
}
