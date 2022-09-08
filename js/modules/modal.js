export default function initModal() {
  const modal = document.querySelector("[data-modal='abrir']");
  const section = document.querySelector(".modal-container");
  const fechar = document.querySelector("[data-modal='fechar']");
  function toggleModal(event) {
    event.preventDefault();
    return section.classList.toggle("ativo");
  }
  function cliqueFora(event) {
    if (event.target === this) toggleModal(event);
  }
  if (modal && section && fechar) {
    modal.addEventListener("click", toggleModal);
    fechar.addEventListener("click", toggleModal);
    section.addEventListener("click", cliqueFora);
  }
}
