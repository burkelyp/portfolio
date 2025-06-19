document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".observed-section");
  const navLinks = document.querySelectorAll(".nav-link");

  const observer = new IntersectionObserver(
    (entries) => {
      let visibleSections = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

      if (visibleSections.length > 0) {
        const id = visibleSections[0].target.id;

        navLinks.forEach(link => {
          link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
        });
      }
    },
    {
      threshold: 0.5, // section must be 50% visible
    }
  );

  sections.forEach(section => observer.observe(section));
});