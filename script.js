// Gestion du menu toggle
document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('nav').classList.toggle('active');
  });
  
  const navLinks = document.querySelectorAll('.nav li a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      document.getElementById('nav').classList.remove('active');
    });
  });

  // Animation au scroll
  document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Arrête d'observer après l'affichage
        }
      });
    }, {
      threshold: 0.5 // Déclenche l'animation lorsque 50% de l'élément est visible
    });

    elements.forEach((element) => {
      observer.observe(element);
    });
  });