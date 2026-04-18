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
/* ================= PRODUCT AUTO FOCUS ================= */

const cards = document.querySelectorAll(".product-card");

let activeIndex = 0;

function setActive(index) {
  cards.forEach(c => c.classList.remove("active"));
  cards[index].classList.add("active");
}

function autoFocus() {
  activeIndex = (activeIndex + 1) % cards.length;
  setActive(activeIndex);
}

if (cards.length > 0) {
  setActive(0);
  setInterval(autoFocus, 3000);
}
cards.forEach((card, i) => {
  card.addEventListener("mouseenter", () => {
    cards.forEach(c => c.classList.remove("active"));
    card.classList.add("active");
  });
});
/* ================= PRODUCT DRIFT ================= */

const track = document.querySelector(".product-track");

let scrollX = 0;

function drift() {
  if (!track) return;

  scrollX += 0.3;
  track.style.transform = `translateX(-${scrollX}px)`;

  if (scrollX > track.scrollWidth / 2) {
    scrollX = 0;
  }

  requestAnimationFrame(drift);
}

drift();
document.querySelectorAll(".live-count").forEach(el => {
  let count = Math.floor(Math.random() * 20) + 10;

  setInterval(() => {
    count += Math.floor(Math.random() * 3) - 1;

    if (count < 8) count = 8;
    if (count > 40) count = 40;

    el.innerText = count + " people viewing";
  }, 2000);
});
const urgencyTexts = [
  "Access opens & closes in waves",
  "Most people join within minutes",
  "Spots tend to disappear quickly",
  "Usually not available for long"
];

document.querySelectorAll(".urgency").forEach(el => {
  setInterval(() => {
    const text = urgencyTexts[Math.floor(Math.random() * urgencyTexts.length)];
    el.innerText = text;
  }, 5000);
});
document.querySelectorAll("button, .cta-button").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.innerText = "Redirecting...";
    btn.style.opacity = 0.7;
  });
});
// HERO PARALLAX
const hero = document.getElementById("hero-visual");

document.addEventListener("mousemove", (e) => {
  if (!hero) return;

  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;

  hero.style.transform = `rotateX(${ -y }deg) rotateY(${ x }deg)`;
});
// ===== SAFE PARTICLE SYSTEM =====
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

  function initParticles() {
    particles = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2,
        d: Math.random() * 0.6 + 0.2
      });
    }
  }

  initParticles();

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(139,92,246,0.6)";
      ctx.fill();

      p.y += p.d;

      if (p.y > canvas.height) {
        p.y = 0;
        p.x = Math.random() * canvas.width;
      }
    });

    requestAnimationFrame(draw);
  }

  draw();
                        }
