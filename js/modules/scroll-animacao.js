export default class ScrollAnimation {
  constructor(target, activeClass) {
    this.target = document.querySelectorAll(target);
    this.activeClass = activeClass;
    this.animacaoHeight = window.innerHeight * 0.7;
    this.animacaoScroll = this.animacaoScroll.bind(this);
  }

  animacaoScroll() {
    this.target.forEach((item) => {
      const sectionTop = item.getBoundingClientRect().top;
      const sectionVisivel = sectionTop - this.animacaoHeight < 0;
      if (sectionVisivel) item.classList.add(this.activeClass);
      else if (item.classList.contains(this.activeClass)) {
        item.classList.remove(this.activeClass);
      }
    });
  }

  init() {
    this.animacaoScroll();
    window.addEventListener("scroll", this.animacaoScroll);
    return this;
  }
}
