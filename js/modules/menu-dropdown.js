import outsideClick from "./outside-click.js";

export default class MenuDropdown {
  constructor(menu, events = ["click", "touchstart"]) {
    this.dropdown = document.querySelectorAll(menu);
    this.classe = "ativo";
    this.events = events;
    this.activeDropdown = this.activeDropdown.bind(this);
  }

  // adiciona os eventos ao dropdown
  addDropdownEvent() {
    this.dropdown.forEach((menu) => {
      this.events.forEach((events) => {
        menu.addEventListener(events, this.activeDropdown);
      });
    });
  }

  // ativa o dropdown e observa o clique fora dele
  activeDropdown(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.classe);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.classe);
    });
  }

  init() {
    if (this.dropdown.length) {
      this.addDropdownEvent();
    }
    return this;
  }
}
