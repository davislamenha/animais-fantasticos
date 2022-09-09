export default async function bitcoinApi(url, target) {
  try {
    const res = await fetch(url);
    const dados = await res.json();
    target.innerText = (1000 / dados.BRL.sell).toFixed(4);
  } catch (erro) {
    console.log(erro);
    console.log("Algo de errado não deu certo!");
  }
}
