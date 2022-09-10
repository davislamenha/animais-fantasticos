import outsideClick from "./outside-click.js";

export default class MenuMobile {
  constructor(menuBtn, menuList, events = ["click", "touchstart"]) {
    this.menuBtn = document.querySelector(menuBtn);
    this.menuList = document.querySelector(menuList);
    this.events = events;
    this.classe = "ativo";
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.menuBtn.classList.toggle(this.classe);
    this.menuList.classList.toggle(this.classe);
    outsideClick(this.menuList, this.events, () => {
      this.menuBtn.classList.remove(this.classe);
      this.menuList.classList.remove(this.classe);
    });
  }

  addMenuMobileEvents() {
    this.events.forEach((evento) =>
      this.menuBtn.addEventListener(evento, this.openMenu)
    );
  }

  init() {
    if (this.menuBtn && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
