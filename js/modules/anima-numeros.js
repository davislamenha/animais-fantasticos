export default class AnimaNumeros {
  constructor(numeros, oberserverTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerTarget = document.querySelector(oberserverTarget);
    this.observerClass = observerClass;
    this.handleMutation = this.handleMutation.bind(this);
  }

  // recebe um elemento do dom, com numero em seu texto
  // incrementa a partir de 0 até o numero final
  static incrementarNumero(numero) {
    const total = +numero.innerText;
    const add = Math.floor(total / 100);

    let start = 0;
    const timer = setInterval(() => {
      start += add;
      numero.innerText = start;

      if (start >= total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  // ativa incrementar numero para cada numero selecionado
  animaNumeros() {
    this.numeros.forEach((numero) =>
      this.constructor.incrementarNumero(numero)
    );
  }

  // função que ocorre quando a mutação ocorrer
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.olho.disconnect();
      this.animaNumeros();
    }
  }

  // verfica quando a classe é adicionada ao elemento target
  addMutationOberserver() {
    this.olho = new MutationObserver(this.handleMutation);
    this.olho.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observerTarget) {
      this.addMutationOberserver();
    }
    return this;
  }
}
