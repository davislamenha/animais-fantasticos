import AnimaNumeros from "./anima-numeros.js";

export default function initAnimaisApi() {
  const numerosGrid = document.querySelector(".numeros-grid");
  function createAnimal(especie, quantidade) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${especie}</h3><span data-numero>${quantidade}</span>`;
    return div;
  }

  async function animaisApi(url) {
    try {
      const res = await fetch(url);
      const dados = await res.json();
      dados.forEach((animal) => {
        const div = createAnimal(animal.especie, animal.quantidade);
        numerosGrid.appendChild(div);
      });
      const animaNumeros = new AnimaNumeros(
        "[data-numero]",
        ".numeros",
        "ativo"
      );
      animaNumeros.init();
    } catch (erro) {
      console.log(erro);
      console.log("Algo de errado não deu certo!");
    }
  }

  animaisApi("./animaisapi.json");
}
