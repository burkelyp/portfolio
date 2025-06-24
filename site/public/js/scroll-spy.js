
// Scroll spy to highlight section
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".observed-section");
  const navLinks = document.querySelectorAll(".nav-link");
  const main = document.querySelector('main');

  const topLink = document.querySelector('a[href="about-me"]');
  topLink.classList.add("active");

  main.addEventListener('scroll', () => {
      let currentSectionId = 'about-me';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        
        if (main.scrollTop >= sectionTop - 200) {
            currentSectionId = section.id;
        }
      });

      navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === currentSectionId) {
              link.classList.add('active');
          }
      });
  });
});


// Smooth scroll within main
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetSection = document.getElementById(targetId);
    const main = document.querySelector('main');

    if (targetSection && main) {
      main.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const fragment = window.location.hash.split('#')[1];
  if (fragment) {
    const main = document.querySelector('main');
    const targetSection = document.getElementById(fragment);
    if (targetSection) {
      main.scrollTo({
        top: targetSection.offsetTop
      })
    }
  }
})