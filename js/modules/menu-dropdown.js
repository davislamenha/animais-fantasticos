import outsideClick from "./outside-click.js";

export default function initMenuDropdown() {
  const dropdown = document.querySelectorAll("[data-dropdown]");
  function handleClick(event) {
    event.preventDefault();
    this.classList.add("ativo");
    outsideClick(this, ["click", "touchstart"], () => {
      this.classList.remove("ativo");
    });
  }
  dropdown.forEach((menu) => {
    ["click", "touchstart"].forEach((events) => {
      menu.addEventListener(events, handleClick);
    });
  });
}
