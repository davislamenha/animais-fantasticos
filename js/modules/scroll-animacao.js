import debounce from "./debounce.js";

export default class ScrollAnimation {
  constructor(target, activeClass) {
    this.target = document.querySelectorAll(target);
    this.activeClass = activeClass;
    this.animacaoHeight = window.innerHeight * 0.7;
    this.checkDistance = debounce(this.checkDistance.bind(this), 50);
  }

  // pega a distancia de cada item em relacao ao topo
  getDistance() {
    this.distance = [...this.target].map((section) => {
      const sectionTop = section.offsetTop;
      return {
        element: section,
        offsetTop: Math.floor(sectionTop - this.animacaoHeight),
      };
    });
  }

  // verifca a distancia de cada objeto em relacao ao scroll
  checkDistance() {
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offsetTop) {
        item.element.classList.add(this.activeClass);
      } else if (item.element.classList.contains(this.activeClass)) {
        item.element.classList.remove(this.activeClass);
      }
    });
  }

  init() {
    if (this.target.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener("scroll", this.checkDistance);
    }

    return this;
  }

  // remove o event de scroll
  stop() {
    window.removeEventListener("scroll", this.checkDistance);
  }
}
