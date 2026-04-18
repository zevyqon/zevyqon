/* ===============================
   ZEVYQON CORE MOTION ENGINE
================================= */

// WAIT FOR DOM
document.addEventListener("DOMContentLoaded", () => {

  /* ================= HERO SLIDER ================= */
  const slides = document.querySelectorAll(".slide");
  let current = 0;

  function showSlide(index) {
    slides.forEach(s => s.classList.remove("active"));
    slides[index].classList.add("active");
  }

  setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
  }, 5000);


  /* ================= MOBILE MENU ================= */
  const toggle = document.querySelector(".mobile-toggle");
  const menu = document.querySelector(".mobile-menu");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("active");
    });
  }


  /* ================= SCROLL REVEAL ================= */
  const revealEls = document.querySelectorAll(".section, .reveal");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, { threshold: 0.2 });

  revealEls.forEach(el => observer.observe(el));


  /* ================= MAGNETIC EFFECT ================= */
  document.querySelectorAll("button, .product-card").forEach(el => {
    el.addEventListener("mousemove", e => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });

    el.addEventListener("mouseleave", () => {
      el.style.transform = "translate(0,0)";
    });
  });


  /* ================= CURSOR GLOW ================= */
  const glow = document.getElementById("cursor-glow");

  if (glow) {
    document.addEventListener("mousemove", e => {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    });
  }


  /* ================= PARTICLE SYSTEM (SINGLE CLEAN VERSION) ================= */
  const canvas = document.getElementById("particles");

  if (canvas) {
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let particles = [];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: Math.random() * 0.5 - 0.25,
        vy: Math.random() * 0.5 - 0.25,
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
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(108,59,255,0.4)";
        ctx.fill();
      });

      requestAnimationFrame(animateParticles);
    }

    animateParticles();
  }


  /* ================= 3D TILT ================= */
  document.querySelectorAll(".tilt").forEach(el => {
    el.addEventListener("mousemove", e => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateX = (y / rect.height - 0.5) * 10;
      const rotateY = (x / rect.width - 0.5) * -10;

      el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    el.addEventListener("mouseleave", () => {
      el.style.transform = `rotateX(0) rotateY(0)`;
    });
  });


  /* ================= FLOAT ================= */
  document.querySelectorAll(".float").forEach((el, i) => {
    el.style.animation = `float ${4 + i}s ease-in-out infinite`;
  });


  /* ================= GLITCH ================= */
  setInterval(() => {
    document.querySelectorAll(".glitch").forEach(el => {
      el.classList.add("glitch-active");

      setTimeout(() => {
        el.classList.remove("glitch-active");
      }, 150);
    });
  }, 4000);


  /* ================= LIVE COUNTER ================= */
  document.querySelectorAll(".live-count").forEach(el => {
    setInterval(() => {
      const n = Math.floor(Math.random() * 30) + 12;
      el.innerText = `${n} people viewing right now`;
    }, 3000);
  });

});
/* ================= PARALLAX DEPTH ================= */

const back = document.querySelector(".layer-back");
const mid = document.querySelector(".layer-mid");
const front = document.querySelector(".layer-front");

document.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  if (back) {
    back.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
  }

  if (mid) {
    mid.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
  }

  if (front) {
    front.style.transform = `translate(${x * 30}px, ${y * 30}px)`;
  }
});
/* ================= MICRO DRIFT ================= */

document.querySelectorAll(".product-card, .hero-image-slot").forEach((el, i) => {
  let offset = 0;

  setInterval(() => {
    offset = offset === 0 ? 6 : 0;
    el.style.transform += ` translateY(${offset}px)`;
  }, 3000 + i * 400);
});
