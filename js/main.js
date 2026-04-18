// ===============================================
// ZEVYQON CINEMATIC MOTION ENGINE (CLEAN VERSION)
// ===============================================

document.addEventListener("DOMContentLoaded", () => {

  // ============================================
  // HERO SLIDER (UNIFIED)
  // ============================================
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  if (slides.length > 0) {
    showSlide(currentSlide);
    setInterval(nextSlide, 6000);
  }


  // ============================================
  // MOBILE MENU
  // ============================================
  const toggle = document.querySelector(".mobile-toggle");
  const menu = document.querySelector(".mobile-menu");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("active");
    });
  }


  // ============================================
  // SCROLL REVEAL (INTERSECTION OBSERVER)
  // ============================================
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, { threshold: 0.2 });

  reveals.forEach(el => observer.observe(el));


  // ============================================
  // MAGNETIC EFFECT
  // ============================================
  document.querySelectorAll(".magnetic, button").forEach(el => {
    el.addEventListener("mousemove", e => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px) scale(1.05)`;
    });

    el.addEventListener("mouseleave", () => {
      el.style.transform = "translate(0,0) scale(1)";
    });
  });


  // ============================================
  // CURSOR GLOW
  // ============================================
  const glow = document.getElementById("cursor-glow");

  if (glow) {
    document.addEventListener("mousemove", e => {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    });
  }


  // ============================================
  // LIVE VIEW COUNTERS
  // ============================================
  const counters = document.querySelectorAll(".live-count");

  function randomViewers() {
    return Math.floor(Math.random() * 30) + 12;
  }

  function updateCounters() {
    counters.forEach(el => {
      el.innerText = `${randomViewers()} people viewing right now`;
    });
  }

  if (counters.length > 0) {
    updateCounters();
    setInterval(updateCounters, 4000);
  }


  // ============================================
  // 3D TILT
  // ============================================
  document.querySelectorAll(".tilt").forEach(el => {
    el.addEventListener("mousemove", e => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateX = (y / rect.height - 0.5) * -10;
      const rotateY = (x / rect.width - 0.5) * 10;

      el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    el.addEventListener("mouseleave", () => {
      el.style.transform = "rotateX(0) rotateY(0)";
    });
  });


  // ============================================
  // FLOAT ANIMATION (CSS DRIVEN)
  // ============================================
  document.querySelectorAll(".float").forEach((el, i) => {
    el.style.animation = `float ${4 + i}s ease-in-out infinite`;
  });


  // ============================================
  // SCATTER → ASSEMBLE
  // ============================================
  document.querySelectorAll(".scatter").forEach(el => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;

    el.style.transform = `translate(${x}px, ${y}px) scale(0.8)`;
    el.style.opacity = 0;

    setTimeout(() => {
      el.style.transition = "all 1s ease";
      el.style.transform = "translate(0,0) scale(1)";
      el.style.opacity = 1;
    }, 500);
  });


  // ============================================
  // PRODUCT AUTO SCROLL
  // ============================================
  const track = document.querySelector(".product-track");

  if (track) {
    let scroll = 0;

    function animateProducts() {
      scroll += 0.3;
      track.scrollLeft = scroll;
      requestAnimationFrame(animateProducts);
    }

    animateProducts();
  }


  // ============================================
  // PARTICLE SYSTEM (MERGED CLEAN)
  // ============================================
  const canvas = document.getElementById("particles");
  const ctx = canvas?.getContext("2d");

  if (canvas && ctx) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: Math.random() * 0.5 - 0.25,
        vy: Math.random() * 0.5 - 0.25,
        r: Math.random() * 2
      });
    }

    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(108,59,255,0.4)";
        ctx.fill();
      });

      requestAnimationFrame(animateParticles);
    }

    animateParticles();
  }


  // ============================================
  // BREATHING BACKGROUND
  // ============================================
  let hue = 260;

  function breathingBackground() {
    hue += 0.05;

    document.body.style.background = `
      radial-gradient(circle at center,
      hsl(${hue}, 70%, 8%),
      #050507 70%)
    `;

    requestAnimationFrame(breathingBackground);
  }

  breathingBackground();


  // ============================================
  // GLITCH EFFECT (CONTROLLED)
  // ============================================
  setInterval(() => {
    document.querySelectorAll(".glitch").forEach(el => {
      el.classList.add("glitch-active");

      setTimeout(() => {
        el.classList.remove("glitch-active");
      }, 150);
    });
  }, 4000);


  // ============================================
  // MARQUEE ENGINE (FIXED)
  // ============================================
  document.querySelectorAll(".track").forEach(track => {
    let pos = 0;

    function animate() {
      pos -= 0.4;
      track.style.transform = `translateX(${pos}px)`;

      if (Math.abs(pos) > track.scrollWidth / 2) {
        pos = 0;
      }

      requestAnimationFrame(animate);
    }

    animate();
  });

});
