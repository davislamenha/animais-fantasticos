export default function initScrollAnimation() {
  const classeAtivo = "ativo";
  const sections = document.querySelectorAll("[data-anime='scroll']");
  const animacaoHeight = window.innerHeight * 0.7;
  function animacaoScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionVisivel = sectionTop - animacaoHeight < 0;
      if (sectionVisivel) section.classList.add(classeAtivo);
      else if (section.classList.contains(classeAtivo)) {
        section.classList.remove(classeAtivo);
      }
    });
  }
  if (sections.length) {
    window.addEventListener("scroll", animacaoScroll);
  }
}
