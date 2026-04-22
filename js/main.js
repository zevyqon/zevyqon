/* ============================================================
   ZEVYQON PREMIUM ENGINE v6.0
   - Original Particles (High Speed)
   - 3D Parallax & Magnetic UI
   - Alive Card Interactions
   - Perfect Mobile Navigation
============================================================ */

document.addEventListener("DOMContentLoaded", () => {
    'use strict';

    const CONFIG = {
        particleCount: window.innerWidth < 768 ? 60 : 120,
        particleSpeed: 1.5,
        magneticStrength: 0.15,
        parallaxStrength: 0.05,
    };

    const els = {
        canvas: document.getElementById("particles"),
        cursor: document.getElementById("cursor-glow"),
        visual: document.querySelector(".visual-container"),
        cards: document.querySelectorAll(".glass-card"),
        diffCards: document.querySelectorAll(".diff-card"),
        nav: document.querySelector(".nav"),
        mobileToggle: document.querySelector(".mobile-toggle"),
        mobileMenu: document.querySelector(".mobile-menu")
    };

    /* ===========================
       1. HIGH-SPEED PARTICLES
    =========================== */
    if (els.canvas) {
        const ctx = els.canvas.getContext("2d");
        let particles = [];
        let w, h;

        const resize = () => {
            w = els.canvas.width = window.innerWidth;
            h = els.canvas.height = window.innerHeight;
        };
        window.addEventListener("resize", resize);
        resize();

        class P {
            constructor() { this.init(); }
            init() {
                this.x = Math.random() * w;
                this.y = Math.random() * h;
                this.s = Math.random() * 2;
                this.vx = (Math.random() - 0.5) * CONFIG.particleSpeed;
                this.vy = (Math.random() - 0.5) * CONFIG.particleSpeed;
                this.o = Math.random() * 0.5 + 0.2;
            }
            update() {
                this.x += this.vx; this.y += this.vy;
                if (this.x < 0) this.x = w; if (this.x > w) this.x = 0;
                if (this.y < 0) this.y = h; if (this.y > h) this.y = 0;
            }
            draw() {
                ctx.fillStyle = `rgba(108, 59, 255, ${this.o})`;
                ctx.beginPath(); ctx.arc(this.x, this.y, this.s, 0, Math.PI * 2); ctx.fill();
            }
        }

        for (let i = 0; i < CONFIG.particleCount; i++) particles.push(new P());

        const animate = () => {
            ctx.clearRect(0, 0, w, h);
            particles.forEach(p => { p.update(); p.draw(); });
            requestAnimationFrame(animate);
        };
        animate();
    }

    /* ===========================
       2. 3D PARALLAX & ALIVE CARDS
    =========================== */
    document.addEventListener("mousemove", (e) => {
        const { clientX, clientY } = e;
        const cx = window.innerWidth / 2;
        const cy = window.innerHeight / 2;
        const mx = (clientX - cx) / cx;
        const my = (clientY - cy) / cy;

        // Cursor Glow
        if (els.cursor) {
            els.cursor.style.left = `${clientX}px`;
            els.cursor.style.top = `${clientY}px`;
        }

        // Hero Tilt (Desktop Only)
        if (els.visual && window.innerWidth > 1100) {
            const rx = -my * 15;
            const ry = mx * 15;
            els.visual.style.transform = `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg)`;
        }

        // Glass Card Parallax
        if (window.innerWidth > 768) {
            els.cards.forEach((card, i) => {
                const f = (i + 1) * 20;
                card.style.transform = `translate3d(${mx * f}px, ${my * f}px, 50px)`;
            });
        }

        // Alive Diff Cards (Glow Following Mouse)
        els.diffCards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const x = ((clientX - rect.left) / rect.width) * 100;
            const y = ((clientY - rect.top) / rect.height) * 100;
            card.style.setProperty('--mouse-x', `${x}%`);
            card.style.setProperty('--mouse-y', `${y}%`);
        });
    });

    /* ===========================
       3. NAVIGATION & MOBILE MENU
    ========================== */
    window.addEventListener("scroll", () => {
        if (els.nav) {
            if (window.scrollY > 50) {
                els.nav.style.padding = "15px 0";
                els.nav.style.background = "rgba(5, 5, 7, 0.95)";
                els.nav.style.borderBottom = "1px solid rgba(255, 255, 255, 0.05)";
            } else {
                els.nav.style.padding = "35px 0";
                els.nav.style.background = "transparent";
                els.nav.style.borderBottom = "none";
            }
        }
    });

    if (els.mobileToggle && els.mobileMenu) {
        els.mobileToggle.addEventListener("click", () => {
            els.mobileToggle.classList.toggle("active");
            els.mobileMenu.classList.toggle("active");
            document.body.style.overflow = els.mobileMenu.classList.contains("active") ? "hidden" : "";
        });

        els.mobileMenu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                els.mobileToggle.classList.remove("active");
                els.mobileMenu.classList.remove("active");
                document.body.style.overflow = "";
            });
        });
    }

    /* ===========================
       4. MAGNETIC UI
    =========================== */
    const mag = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-get-access');
    mag.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const r = el.getBoundingClientRect();
            const x = e.clientX - r.left - r.width / 2;
            const y = e.clientY - r.top - r.height / 2;
            el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });
        el.addEventListener('mouseleave', () => {
            el.style.transform = 'translate(0, 0)';
        });
    });
});
