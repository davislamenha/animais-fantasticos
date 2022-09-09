export default function bitcoinApi(url, target) {
  const btc = document.querySelector(target);
  async function getBtc() {
    try {
      const res = await fetch(url);
      const dados = await res.json();
      btc.innerText = (1000 / dados.BRL.sell).toFixed(4);
    } catch (erro) {
      console.log(erro);
      console.log("Algo de errado não deu certo!");
    }
  }
  return getBtc();
}
