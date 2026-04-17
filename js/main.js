// ===== HERO SLIDER =====
let slides = document.querySelectorAll(".slide");
let current = 0;

setInterval(() => {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
}, 5000);


// ===== MOBILE MENU =====
const toggle = document.querySelector(".mobile-toggle");
const menu = document.querySelector(".mobile-menu");

toggle.onclick = () => {
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
};


// ===== CURSOR MAGNETIC EFFECT =====
document.querySelectorAll("button, .product-card").forEach(el => {
  el.addEventListener("mousemove", e => {
    let rect = el.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    el.style.transform = `translate(${(x - rect.width/2)/20}px, ${(y - rect.height/2)/20}px)`;
  });

  el.addEventListener("mouseleave", () => {
    el.style.transform = "translate(0,0)";
  });
});


// ===== SCROLL REVEAL =====
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  let trigger = window.innerHeight * 0.85;

  sections.forEach(sec => {
    let top = sec.getBoundingClientRect().top;

    if(top < trigger){
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
    }
  });
});

sections.forEach(sec => {
  sec.style.opacity = 0;
  sec.style.transform = "translateY(40px)";
  sec.style.transition = "1s";
});
// ===== 3D PARTICLE SYSTEM =====
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 120; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2,
    dx: (Math.random() - 0.5) * 0.5,
    dy: (Math.random() - 0.5) * 0.5
  });
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = "#6C3BFF";
    ctx.fill();
  });

  requestAnimationFrame(animateParticles);
}

animateParticles();

// ===============================
// PARTICLE SYSTEM
// ===============================
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2,
    dx: Math.random() * 0.5 - 0.25,
    dy: Math.random() * 0.5 - 0.25
  });
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = "#6c3bff";
    ctx.fill();
  });

  requestAnimationFrame(animateParticles);
}

animateParticles();


// ===============================
// 3D TILT SYSTEM
// ===============================
const tiltElements = document.querySelectorAll(".tilt");

tiltElements.forEach(el => {
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

// ===============================
// PRODUCT AUTO MOVE
// ===============================
const track = document.querySelector(".product-track");

let scrollAmount = 0;

function moveProducts() {
  if (!track) return;

  scrollAmount += 0.3;
  track.scrollLeft = scrollAmount;

  requestAnimationFrame(moveProducts);
}

moveProducts();

// ===============================
// CURSOR GLOW
// ===============================
const glow = document.getElementById("cursor-glow");

document.addEventListener("mousemove", e => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});


// ================= HERO SLIDER =================
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 6000); // smooth timing

// ================= SCROLL REVEAL =================
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.2 });

reveals.forEach((el) => observer.observe(el));

// ================= MAGNETIC BUTTON =================
const magneticItems = document.querySelectorAll(".magnetic");

magneticItems.forEach((item) => {
  item.addEventListener("mousemove", (e) => {
    const rect = item.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    item.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  });

  item.addEventListener("mouseleave", () => {
    item.style.transform = `translate(0,0)`;
  });
});

// ================= CURSOR GLOW =================
const glow = document.getElementById("cursor-glow");

document.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

// ================= LIVE VIEW COUNTER =================
const counters = document.querySelectorAll(".live-count");

function randomViewers() {
  return Math.floor(Math.random() * 30) + 12;
}

function updateCounters() {
  counters.forEach((el) => {
    el.innerText = `${randomViewers()} people viewing right now`;
  });
}

updateCounters();
setInterval(updateCounters, 4000);

// ================= 3D TILT =================
const tiltCards = document.querySelectorAll(".tilt");

tiltCards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y / rect.height - 0.5) * 10;
    const rotateY = (x / rect.width - 0.5) * -10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = `rotateX(0) rotateY(0)`;
  });
});

// ================= FLOAT ANIMATION =================
const floats = document.querySelectorAll(".float");

floats.forEach((el, i) => {
  el.style.animation = `float ${4 + i}s ease-in-out infinite`;
});

// ================= SCATTER → ASSEMBLE =================
const scatterItems = document.querySelectorAll(".scatter");

scatterItems.forEach((el) => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;

  el.style.transform = `translate(${x}px, ${y}px) scale(0.8)`;

  setTimeout(() => {
    el.style.transition = "all 1.2s ease";
    el.style.transform = "translate(0,0) scale(1)";
  }, 500);
});

// ================= MOBILE MENU =================
const toggle = document.querySelector(".mobile-toggle");
const menu = document.querySelector(".mobile-menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// ================= PARTICLE SYSTEM =================
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: Math.random() * 0.5,
    vy: Math.random() * 0.5,
  });
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p) => {
    p.x += p.vx;
    p.y += p.vy;

    if (p.x > canvas.width) p.x = 0;
    if (p.y > canvas.height) p.y = 0;

    ctx.fillStyle = "rgba(255,255,255,0.1)";
    ctx.beginPath();
    ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
    ctx.fill();
  });

  requestAnimationFrame(animateParticles);
}

animateParticles();

// ===============================
// ZEVYQON MOTION ENGINE
// ===============================

// -------------------------------
// BREATHING BACKGROUND
// -------------------------------
const body = document.body;
let hue = 260;

function breathingBackground() {
  hue += 0.05;

  body.style.background = `
    radial-gradient(circle at 50% 50%, 
      hsl(${hue}, 70%, 8%), 
      #050507 70%)
  `;

  requestAnimationFrame(breathingBackground);
}

breathingBackground();


// -------------------------------
// SCROLL REVEAL ANIMATION
// -------------------------------
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      el.classList.add('active');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);


// -------------------------------
// MAGNETIC HOVER EFFECT
// -------------------------------
document.querySelectorAll('.magnetic').forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px) scale(1.05)`;
  });

  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'translate(0,0) scale(1)';
  });
});


// -------------------------------
// GLITCH EFFECT (SUBTLE)
// -------------------------------
setInterval(() => {
  document.querySelectorAll('.glitch').forEach(el => {
    el.classList.add('glitch-active');

    setTimeout(() => {
      el.classList.remove('glitch-active');
    }, 150);
  });
}, 4000);


// -------------------------------
// FAKE LIVE VIEWERS COUNTER
// -------------------------------
const viewerElement = document.getElementById('live-viewers');

if (viewerElement) {
  let count = Math.floor(Math.random() * 20) + 8;

  setInterval(() => {
    count += Math.floor(Math.random() * 3) - 1;

    if (count < 5) count = 5;
    if (count > 40) count = 40;

    viewerElement.innerText = count + " people viewing this";
  }, 2000);
}


// -------------------------------
// FLOATING ELEMENTS
// -------------------------------
document.querySelectorAll('.float').forEach((el, i) => {
  let direction = 1;

  setInterval(() => {
    el.style.transform = `translateY(${direction * 10}px)`;
    direction *= -1;
  }, 2000 + i * 200);
});


// -------------------------------
// MARQUEE ENGINE (LOOP)
// -------------------------------
const marquees = document.querySelectorAll('.marquee');

marquees.forEach(marquee => {
  let pos = 0;

  function animate() {
    pos -= 0.3;
    marquee.style.transform = `translateX(${pos}px)`;

    if (Math.abs(pos) > marquee.scrollWidth / 2) {
      pos = 0;
    }

    requestAnimationFrame(animate);
  }

  animate();
});


// -------------------------------
// PRODUCT SCATTER → ASSEMBLE
// -------------------------------
const products = document.querySelectorAll('.product');

products.forEach((el, i) => {
  el.style.transform = `
    translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px)
    rotate(${Math.random() * 30 - 15}deg)
  `;
  el.style.opacity = 0;
});

setTimeout(() => {
  products.forEach((el, i) => {
    setTimeout(() => {
      el.style.transition = "all 0.8s ease";
      el.style.transform = "translate(0,0) rotate(0)";
      el.style.opacity = 1;
    }, i * 120);
  });
}, 600);
