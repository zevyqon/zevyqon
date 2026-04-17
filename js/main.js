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
