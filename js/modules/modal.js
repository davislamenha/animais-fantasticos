export default class Modal {
  constructor(modal, section, fechar) {
    this.modal = document.querySelector(modal);
    this.section = document.querySelector(section);
    this.fechar = document.querySelector(fechar);

    // bind this ao callback para fazer referência ao objeto da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueFora = this.cliqueFora.bind(this);
  }

  // abre ou fecha o modal
  toggleModal() {
    return this.section.classList.toggle("ativo");
  }

  // adiciona o evento de toggle ao modal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal(event);
  }

  // fecha ao clicar do lado de fora
  cliqueFora(event) {
    if (event.target === this.section) this.toggleModal();
  }

  // adiciona os eventos ao modal
  addModalEvent() {
    this.modal.addEventListener("click", this.eventToggleModal);
    this.fechar.addEventListener("click", this.eventToggleModal);
    this.section.addEventListener("click", this.cliqueFora);
  }

  init() {
    if (this.modal && this.section && this.fechar) {
      this.addModalEvent();
    }
    return this;
  }
}
