// GSAP
gsap.registerPlugin(ScrollTrigger);

// HERO ENTRANCE
gsap.from(".hero-content", {
  opacity: 0,
  y: 80,
  duration: 1.2,
  ease: "power3.out"
});

// MAGNETIC BUTTON
const button = document.querySelector(".cta-button");

button.addEventListener("mousemove", (e) => {
  const rect = button.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;

  gsap.to(button, {
    x: x * 0.2,
    y: y * 0.2,
    duration: 0.3,
    ease: "power2.out"
  });
});

button.addEventListener("mouseleave", () => {
  gsap.to(button, {
    x: 0,
    y: 0,
    duration: 0.5,
    ease: "elastic.out(1, 0.3)"
  });
});

// BACKGROUND PARALLAX (SUBTLE)
document.addEventListener("mousemove", (e) => {
  const bg = document.querySelector(".background");

  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;

  gsap.to(bg, {
    x: x,
    y: y,
    duration: 1,
    ease: "power2.out"
  });
});
