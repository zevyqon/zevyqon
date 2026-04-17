// REGISTER GSAP
gsap.registerPlugin(ScrollTrigger);

// HERO ANIMATION (SYSTEM AWAKENING)
gsap.from(".hero-title", {
  opacity: 0,
  y: 50,
  duration: 1.2,
  ease: "power3.out"
});

gsap.from(".hero-subtext", {
  opacity: 0,
  y: 40,
  delay: 0.3,
  duration: 1.2,
  ease: "power3.out"
});

gsap.from(".cta-button", {
  opacity: 0,
  y: 30,
  delay: 0.6,
  duration: 1,
  ease: "power3.out"
});
