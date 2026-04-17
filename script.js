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
