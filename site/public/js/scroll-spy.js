document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".observed-section");
  const navLinks = document.querySelectorAll(".nav-link");
  const main = document.querySelector('main');

  const topLink = document.querySelector('a[href="/#about-me"]');
  topLink.classList.add("active");

  main.addEventListener('scroll', () => {
      let currentSectionId = 'about-me';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (main.scrollTop >= sectionTop - 200) {
            currentSectionId = section.id;
        }
      });

      navLinks.forEach(link => {
        const hrefId = link.getAttribute('href').split('#')[1];

          link.classList.remove('active');
          if (hrefId === currentSectionId) {
              link.classList.add('active');
          }
      });
  });
});
