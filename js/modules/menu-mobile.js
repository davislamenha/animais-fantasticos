import outsideClick from "./outside-click.js";

export default function initMenuMobile() {
  const menuBtn = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ["click", "touchstart"];

  if (menuBtn) {
    eventos.forEach((evento) => {
      menuBtn.addEventListener(evento, () => {
        menuBtn.classList.toggle("ativo");
        menuList.classList.toggle("ativo");
        outsideClick(menuList, eventos, () => {
          menuBtn.classList.remove("ativo");
          menuList.classList.remove("ativo");
        });
      });
    });
  }
}
