export default class TabNav {
  constructor(imagens, info) {
    this.tabImg = document.querySelectorAll(imagens);
    this.tabInfo = document.querySelectorAll(info);
    this.activeClass = "ativo";
  }

  // ativa a tab de acordo com o index
  ativarTab(index) {
    this.tabInfo.forEach((info) => info.classList.remove(this.activeClass));
    const { anime } = this.tabInfo[index].dataset;
    this.tabInfo[index].classList.add(this.activeClass, anime);
  }

  // adicionar eventos nas tabs
  addTabNavEvent() {
    this.tabImg.forEach((img, index) => {
      img.addEventListener("click", () => this.ativarTab(index));
    });
  }

  init() {
    if (this.tabImg.length && this.tabInfo.length) {
      // ativar primeiro item
      this.ativarTab(0);
      this.addTabNavEvent();
    }
  }
}
