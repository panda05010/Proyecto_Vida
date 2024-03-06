//toggle icono activo navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// seccion de scroll link activo
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  //   navbar fija
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  //remover el toggle del icono del navbar cundo hacemos click
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

//scroll reveal
ScrollReveal({
  //reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading .heading2", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portafolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content, .about-content1", { origin: "right" });

//js typeado para las animaciones de las letras del titulo cuando se borra y escribe solo
const typed = new Typed(".multiple-text", {
  strings:[ 
   "Desarrollador Web",
   "Programador Jr. "
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

