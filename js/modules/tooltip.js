export default class Tooltip {
  constructor(mapa) {
    this.mapa = document.querySelectorAll(mapa);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  // cria a tooltip box e coloca no body
  tipBox(element) {
    const box = document.createElement("div");
    box.classList.add("tooltip");
    box.innerText = element.getAttribute("aria-label");
    document.body.appendChild(box);
    this.box = box;
  }

  // cria e adiciona os eventos de mousemove e mouseleave
  onMouseOver({ currentTarget }) {
    // cria a tooltipbox e coloca uma propriedade

    this.tipBox(currentTarget);

    currentTarget.addEventListener("mousemove", this.onMouseMove);
    currentTarget.addEventListener("mouseleave", this.onMouseLeave);
  }

  // move a tooltip de acordo com a posição do mouse
  onMouseMove(event) {
    this.box.style.top = `${event.pageY + 20}px`;
    if (event.pageX + 240 > window.innerWidth) {
      this.box.style.left = `${event.pageX - 200}px`;
    } else {
      this.box.style.left = `${event.pageX + 20}px`;
    }
  }

  // remove a tooltip e os eventos de mousemove e mouseleave
  onMouseLeave({ currentTarget }) {
    this.box.remove();
    currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
    currentTarget.removeEventListener("mousemove", this.onMouseMove);
  }

  // adiciona os eventos de mouseover a cada tooltip
  addTooltipEvent() {
    this.mapa.forEach((item) => {
      item.addEventListener("mouseover", this.onMouseOver);
    });
  }

  init() {
    if (this.mapa.length) {
      this.addTooltipEvent();
    }
    return this;
  }
}
