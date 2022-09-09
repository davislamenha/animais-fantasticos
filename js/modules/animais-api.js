import AnimaNumeros from "./anima-numeros.js";

export default function animaisApi(url, target) {
  const elementTarget = document.querySelector(target);

  // cria a div com o total de animais
  function createAnimal(especie, quantidade) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${especie}</h3><span data-numero>${quantidade}</span>`;
    return div;
  }

  // preenche cada animal no dom
  function preencherAnimais(animal) {
    const div = createAnimal(animal.especie, animal.quantidade);
    elementTarget.appendChild(div);
  }

  // anima os números da cada animal
  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros("[data-numero]", ".numeros", "ativo");
    animaNumeros.init();
  }

  // puxa os animais atravéz de um arquivo json
  // cria cada animal utilizando criarAnimais
  async function criarAnimais() {
    try {
      // fetch e espera da resposta para transformar em json
      const res = await fetch(url);
      const dados = await res.json();
      // apos a transformação de json ativa a transformação para preencher e animar os números
      dados.forEach((animal) => preencherAnimais(animal));
      animaAnimaisNumeros();
    } catch (erro) {
      console.log(erro);
      console.log("Algo de errado não deu certo!");
    }
  }

  return criarAnimais();
}
