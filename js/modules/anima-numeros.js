export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll("[data-numero]");

    numeros.forEach((numero) => {
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
    });
  }
  let olho;
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      olho.disconnect();
      animaNumeros();
    }
  }
  const target = document.querySelector(".numeros");
  olho = new MutationObserver(handleMutation);
  olho.observe(target, { attributes: true });
}
