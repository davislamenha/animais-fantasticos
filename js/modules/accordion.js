export default class Accordion {
  constructor(lista) {
    this.faqPerguntas = document.querySelectorAll(lista);
    this.activeClass = "ativo";
  }

  toggleAccordion(pergunta) {
    pergunta.classList.toggle(this.activeClass);
    pergunta.nextElementSibling.classList.toggle(this.activeClass);
  }

  // adiciona eventos ao accordion
  addAccordionList() {
    this.faqPerguntas.forEach((pergunta) => {
      pergunta.addEventListener("click", () => this.toggleAccordion(pergunta));
    });
  }

  // iniciar função
  init() {
    if (this.faqPerguntas.length) {
      // ativar primeiro item
      this.toggleAccordion(this.faqPerguntas[0]);
      this.addAccordionList();
    }
  }
}
