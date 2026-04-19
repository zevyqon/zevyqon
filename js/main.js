/* ============================================================
   ZEVYQON CORE MOTION ENGINE v2.0
   - Optimized for Performance & Smoothness
   - Advanced 3D Parallax & Magnetic Interactions
============================================================ */

document.addEventListener("DOMContentLoaded", () => {
    'use strict';

    // CONFIGURATION
    const CONFIG = {
        particleCount: window.innerWidth < 768 ? 40 : 80,
        particleBaseSpeed: 0.5,
        magneticStrength: 0.15,
        parallaxStrength: 0.05,
        revealThreshold: 0.15
    };

    // DOM ELEMENTS
    const elements = {
        canvas: document.getElementById("particles"),
        cursorGlow: document.getElementById("cursor-glow"),
        nav: document.querySelector(".nav-header"),
        mobileToggle: document.querySelector(".mobile-toggle"),
        mobileMenu: document.querySelector(".mobile-menu"),
        heroVisual: document.querySelector(".hero-visual"),
        cube: document.querySelector(".cube-main"),
        floaters: document.querySelectorAll(".floater"),
        revealEls: document.querySelectorAll(".reveal"),
        magneticEls: document.querySelectorAll(".magnetic")
    };

    /* ============================================================
       1. PARTICLE SYSTEM (NEURAL NETWORK EFFECT)
    ============================================================ */
    if (elements.canvas) {
        const ctx = elements.canvas.getContext("2d");
        let particles = [];
        let width, height;

        const resize = () => {
            width = elements.canvas.width = window.innerWidth;
            height = elements.canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", resize);
        resize();

        class Particle {
            constructor() {
                this.init();
            }

            init() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.size = Math.random() * 2 + 1;
                this.speedX = (Math.random() - 0.5) * CONFIG.particleBaseSpeed;
                this.speedY = (Math.random() - 0.5) * CONFIG.particleBaseSpeed;
                this.color = 'rgba(108, 59, 255, ' + (Math.random() * 0.5 + 0.2) + ')';
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x < 0 || this.x > width) this.speedX *= -1;
                if (this.y < 0 || this.y > height) this.speedY *= -1;
            }

            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const initParticles = () => {
            particles = [];
            for (let i = 0; i < CONFIG.particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const drawLines = () => {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        ctx.strokeStyle = `rgba(108, 59, 255, ${0.2 * (1 - distance / 150)})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        };

        const animateParticles = () => {
            ctx.clearRect(0, 0, width, height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            drawLines();
            requestAnimationFrame(animateParticles);
        };

        initParticles();
        animateParticles();
    }

    /* ============================================================
       2. CURSOR GLOW & NAVIGATION SCROLL
    ============================================================ */
    document.addEventListener("mousemove", (e) => {
        if (elements.cursorGlow) {
            elements.cursorGlow.style.left = `${e.clientX}px`;
            elements.cursorGlow.style.top = `${e.clientY}px`;
        }
    });

    window.addEventListener("scroll", () => {
        if (elements.nav) {
            if (window.scrollY > 50) {
                elements.nav.classList.add("scrolled");
            } else {
                elements.nav.classList.remove("scrolled");
            }
        }
    });

    /* ============================================================
       3. MOBILE MENU
    ============================================================ */
    if (elements.mobileToggle && elements.mobileMenu) {
        elements.mobileToggle.addEventListener("click", () => {
            elements.mobileToggle.classList.toggle("active");
            elements.mobileMenu.classList.toggle("active");
            document.body.style.overflow = elements.mobileMenu.classList.contains("active") ? "hidden" : "";
        });

        // Close menu on link click
        elements.mobileMenu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                elements.mobileToggle.classList.remove("active");
                elements.mobileMenu.classList.remove("active");
                document.body.style.overflow = "";
            });
        });
    }

    /* ============================================================
       4. 3D PARALLAX CUBE & FLOATERS
    ============================================================ */
    if (elements.heroVisual) {
        document.addEventListener("mousemove", (e) => {
            const { clientX, clientY } = e;
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            
            const moveX = (clientX - centerX) / centerX;
            const moveY = (clientY - centerY) / centerY;

            // Tilt Cube
            if (elements.cube) {
                const rotateX = moveY * 20;
                const rotateY = moveX * 20;
                // We add to the existing animation via a wrapper or by modulating the transform
                // For simplicity, we'll apply a tilt to the visual container
                elements.heroVisual.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
            }

            // Parallax Floaters
            elements.floaters.forEach(floater => {
                const speed = parseFloat(floater.getAttribute("data-speed")) || 0.05;
                const x = (clientX - centerX) * speed;
                const y = (clientY - centerY) * speed;
                floater.style.transform = `translate3d(${x}px, ${y}px, 0)`;
            });
        });
    }

    /* ============================================================
       5. MAGNETIC EFFECT
    ============================================================ */
    elements.magneticEls.forEach(el => {
        el.addEventListener("mousemove", (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            el.style.transform = `translate(${x * CONFIG.magneticStrength}px, ${y * CONFIG.magneticStrength}px)`;
        });

        el.addEventListener("mouseleave", () => {
            el.style.transform = "translate(0, 0)";
        });
    });

    /* ============================================================
       6. SCROLL REVEAL (INTERSECTION OBSERVER)
    ============================================================ */
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                // Optional: stop observing once revealed
                // revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: CONFIG.revealThreshold,
        rootMargin: "0px 0px -50px 0px"
    });

    elements.revealEls.forEach(el => revealObserver.observe(el));

    /* ============================================================
       7. SMOOTH SECTION SCROLLING (ENHANCEMENT)
    ============================================================ */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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

});
