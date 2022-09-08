export default function initAccordion() {
  const classeAtivo = "ativo";
  const faqPerguntas = document.querySelectorAll("[data-anime='accordion'] dt");
  function ativarAccordion() {
    this.classList.toggle(classeAtivo);
    this.nextElementSibling.classList.toggle(classeAtivo);
  }
  if (faqPerguntas.length) {
    faqPerguntas[0].classList.add(classeAtivo);
    faqPerguntas[0].nextElementSibling.classList.add(classeAtivo);

    faqPerguntas.forEach((pergunta) => {
      pergunta.addEventListener("click", ativarAccordion);
    });
  }
}
