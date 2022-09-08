export default function initTooltip() {
  const mapa = document.querySelectorAll("[data-tooltip]");

  function tipBox(element) {
    const box = document.createElement("div");
    box.classList.add("tooltip");
    box.innerText = element.getAttribute("aria-label");
    document.body.appendChild(box);
    return box;
  }
  function onMouseOver() {
    let onMouseMove;
    let onMouseLeave;
    const box = tipBox(this);
    onMouseMove.box = box;
    this.addEventListener("mousemove", onMouseMove);
    onMouseLeave.box = box;
    onMouseLeave.element = this;
    this.addEventListener("mouseleave", onMouseLeave);
  }
  const onMouseMove = {
    handleEvent(event) {
      this.box.style.top = `${event.pageY + 20}px`;
      this.box.style.left = `${event.pageX + 20}px`;
    },
  };
  const onMouseLeave = {
    handleEvent() {
      this.box.remove();
      this.element.removeEventListener("mouseleave", onMouseLeave);
      this.element.removeEventListener("mousemove", onMouseMove);
    },
  };

  mapa.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver);
  });
}
