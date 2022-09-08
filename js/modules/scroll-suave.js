export default function initSmoothScroll() {
  const linksInternos = document.querySelectorAll(
    "[data-scroll='smooth'] a[href^='#'"
  );
  linksInternos.forEach((link) => {
    function scrollSection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute("href");
      const section = document.querySelector(href);
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    link.addEventListener("click", scrollSection);
  });
}
