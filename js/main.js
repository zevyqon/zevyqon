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
